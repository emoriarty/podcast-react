import fetch from 'isomorphic-fetch'

export const INIT_APP = 'INIT_APP';

export const initApp = () => {
  return {
    type: INIT_APP
  }
} 




export const REQUEST_INITIAL_DATA = 'REQUEST_INITIAL_DATA'
function requestInitialData(data) {
  return {
    type: REQUEST_INITIAL_DATA,
    data
  }
}

export const RECEIVE_INITIAL_DATA = 'RECEIVE_INITIAL_DATA'
function receiveInitialData(data, json) {
  return {
    type: RECEIVE_INITIAL_DATA,
    data,
    receivedAt: Date.now()
  }
}

export const ERROR_INITIAL_DATA = 'ERROR_INITIAL_DATA'
function errorInitialData(subreddit) {
  return {
    type: ERROR_INITIAL_DATA
  }
}

export function fetchInitialData(subreddit) {
  return function (dispatch) {
    dispatch(requestInitialData(subreddit));

    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        else if (response.status != 200) {
          throw new Error("Not valid response");
        }

        return response;
      })
      .then(json =>
        dispatch(receiveInitialData(subreddit, json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}