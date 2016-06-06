import _ from 'underscore';
import yuiFetch from '../utils/yui-fetch.js'
import * as Notifications from '../notifications/actions/notification.action'
import {fetchTranslations} from './translation.action'
import {
  REQUEST_PROVIDER_DATA,
  RECEIVE_PROVIDER_DATA,
  ERROR_PROVIDER_DATA
} from './types/provider.types'


function requestInitialData() {
  return {
    type: REQUEST_PROVIDER_DATA
  }
}

function receiveInitialData(data) {
  return {
    type: RECEIVE_PROVIDER_DATA,
    data,
    receivedAt: Date.now()
  }
}

function errorInitialData() {
  return {
    type: ERROR_PROVIDER_DATA,
    errorTitle: 'Terminal error',
    errorMessage: 'This is embarrasing but the app has crashed. Click the button to reload, in case this message is shown again, please let us know.'
  }
}


// Call functions
function fetchMediaTypes() {
  return yuiFetch('/data/media-types.json')
    .then((r) => {
      console.log(r)
      return _.findWhere(r.results, {store: 'podcast'})
    })
}

function fetchCountries() {
  return yuiFetch('/data/countries.json')
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
  return yuiFetch('/data/lang/' + language + 'media-types.json')
    .then(r => {
      return r.results
    })
}

function fetchCommonTranslations(language) {
  return yuiFetch('/data/lang/' + language + 'common.json')
    .then(r => {
      return r.results
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
          dispatch(Notifications.showAlert({
            title: 'Terminal error',
            text: 'This is embarrasing but the app has crashed. Click the button to reload, in case this message is shown again, please let us know.',
            action: function() {console.log('alert')}
          }))
        }
      )
    }
    catch (e) {
      dispatch(errorInitialData(e));
    }
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

export function fetchInitialData() {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchData());
    }
  }
}
