import _ from 'underscore';

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

function fetchData() {
  return dispatch => {
    dispatch(requestInitialData())
    try {
      YUI().use('yql', (Y) => {
        Y.YQL('select * from html where url=\'https://rss.itunes.apple.com/data/media-types.json\'', function(r) {
          console.log(r);
          let PODCAST_TYPES = JSON.parse(r.query.results.body);
          PODCAST_TYPES = _.findWhere(PODCAST_TYPES, {store: 'podcast'});
          console.log('PODCAST_TYPES', PODCAST_TYPES);
          dispatch(receiveInitialData(PODCAST_TYPES));
        });
      });
    }
    catch (e) {
      console.log(e);
      dispatch(errorInitialData());
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
