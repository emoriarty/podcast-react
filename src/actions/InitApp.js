import _ from 'underscore';
import fetch from 'isomorphic-fetch'

const config = require('config')
console.log('config', config)
const ENV = config.default.appEnv
const PROVIDER_HOST = '/assets' + config.default.providerHost 

export const REQUEST_INITIAL_DATA = 'REQUEST_INITIAL_DATA'
function requestInitialData() {
  return {
    type: REQUEST_INITIAL_DATA
  }
}

export const RECEIVE_INITIAL_DATA = 'RECEIVE_INITIAL_DATA'
function receiveInitialData(data) {
  return {
    type: RECEIVE_INITIAL_DATA,
    data,
    receivedAt: Date.now()
  }
}

export const ERROR_INITIAL_DATA = 'ERROR_INITIAL_DATA'
function errorInitialData() {
  return {
    type: ERROR_INITIAL_DATA,
    error: 'Ups, something went wrong'
  }
}

function shouldFetchData(state) {
  const data = state.coreData;
  if (!data.data) {
    return true
  } else if (data.loading) {
    return false
  }
  
  return false
}

function yuiCall(url) {
  if (ENV === 'dist') {
    return new Promise((resolve, reject) => {
      try {
        YUI().use('yql', (Y) => {
          Y.YQL('select * from html where url=\'' + PROVIDER_HOST + url + '\'', (r) => {
            if (r.query.results.body.length > 0) {
              resolve({
                results: JSON.parse(r.query.results.body)
              })
            }
            else {
              reject({
                message: 'No results'
              })
            }
         })
        })
      }
      catch(e) {
        reject({
          message: e
        });
      }
    })
  }
  else {
    console.log(PROVIDER_HOST, ENV)
    fetch(PROVIDER_HOST + url)
      .then(r => resolve(JSON.parse({ results: r })))
  }
}

function fetchMediaTypes() {
  return yuiCall('/data/media-types.json')
    .then((r) => {
      return _.findWhere(r.results, {store: 'podcast'})
    })
}

function fetchCountries() {
  return yuiCall('/data/countries.json')
    .then(r => {
      let countriesWithPodcasts = _.inject(r.results, function(memo, country) {
        if (country.stores.podcast) {
          // If the country icon link has no host, then add it
          if (!country.flag_icon.match(/^(http|https):\/\//)) {
            memo.push({ ...country, flag_icon: 'https://rss.itunes.apple.com' + country.flag_icon }); 
          }
          else {
            memo.push(country);
          }
        }
        return memo;
      }, []);

      // grouping by region
      console.log(_.groupBy(countriesWithPodcasts, (country) => country.region))

      //

      return countriesWithPodcasts
    })
}

function fetchMediaTypesTranslations(language) {
  return yuiCall('/data/lang/' + language + 'media-types.json')
    .then(r => {
      return r.results
    })
}

function fetchCommonTranslations(language) {
  return yuiCall('/data/lang/' + language + 'common.json')
    .then(r => {
      return r.results
    })
}

// The ones from the app (local)
function fetchTranslations(language) {
  return new Promise((resolve, reject) => {
    fetch('/translations/' + language + '.json')
      .then(r => resolve(JSON.parse(r)))
      .catch(e => {
        if (language.length > 3) {
          fetch('/translations/' + language.slice(0, 2) + '.json')
            .then(r => resolve(JSON.parse(r)))
            .catch(e => reject())// TODO add error message
        }
        else {
          // TODO add error message
          reject();
        }
      })
  })
}

function fetchData(language = navigator.language) {
  return dispatch => {
    dispatch(requestInitialData())

    try {
      Promise.all([
        fetchMediaTypes(),
        fetchCountries(),
        fetchTranslations(language)
      ])
      .then(
        (result) => {
          dispatch(receiveInitialData({ 
            commons: result[0], // common values
            countries: result[1] // countries metadata
          }))
        },
        (error) => {
          dispatch(errorInitialData(error))
        }
      )
    }
    catch (e) {
      dispatch(errorInitialData(e));
    }
  }
}

export function fetchInitialData() {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchData());
    }
  }
}
