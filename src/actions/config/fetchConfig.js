import {FETCH_CONFIG, REQUEST_CONFIG, RECEIVE_CONFIG, ERROR_CONFIG} from './../const';
import {fetchConfig} from '../../services/app';

function requestData() {
  return {
    type: REQUEST_CONFIG
  }
}

function receiveData(data) {
  return {
    type: RECEIVE_CONFIG,
    data,
    receivedAt: Date.now()
  };
}

function errorFetchingData() {
  return {
    type: ERROR_CONFIG
  };
}

function shouldFetchData(state) {
  const config = state.config;
  if (!config.data) {
    return true;
  } else if (config.loading) {
    return false;
  }
  return false;
}

function fetchData() {
  return dispatch => {
    dispatch(requestData());

    try {
      Promise.all([
        fetchConfig()
      ])
      .then(
        (result) => {
          dispatch(receiveData({
            data: result[0].results
          }));
        },
        (error) => {
          dispatch(errorFetchingData(error));
          dispatch(Notifications.showAlert({
            title: 'Terminal error',
            text: 'Could not be retrieved translations texts.'
          }));
        }
      )
    }
    catch (e) {
      dispatch(errorFetchingData(e));
    }
  }
}

export function fetchConfigData() {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchData());
    }
  }
}
