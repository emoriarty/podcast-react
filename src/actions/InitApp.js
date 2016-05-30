import YUI from 'yui/yui/yui.js';
import _ from 'underscore';

//let YUI = require('yui/yui/yui.js');

export const INIT_APP = 'INIT_APP';

export const initApp = () => {
  return {
    type: INIT_APP
  }
}

export const REQUEST_INITIAL_DATA = 'REQUEST_INITIAL_DATA'
function requestInitialData(data) {
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

export function fetchInitialData() {
  return function (dispatch, getState) {
    dispatch(requestInitialData());

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
      dispatch(errorInitialData());
    }
  }
}
