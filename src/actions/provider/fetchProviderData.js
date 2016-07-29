import {REQUEST_PROVIDER, RECEIVE_PROVIDER, ERROR_PROVIDER} from './../const';
import {fetchMediaTypes, fetchRegions} from '../../services/itunes';

function requestData() {
  return {
    type: REQUEST_PROVIDER
  };
}

function receiveData(data) {
  return {
    type: RECEIVE_PROVIDER,
    data,
    receivedAt: Date.now()
  };
}

function errorFetchingData() {
  return {
    type: ERROR_PROVIDER
  };
}

function fetchData() {
  return dispatch => {
    dispatch(requestData());

    try {
      Promise.all([
        fetchMediaTypes(),
        fetchRegions()
      ])
      .then(
        (result) => {
          dispatch(receiveData({
            commons: result[0], // common values
            regions: result[1] // regions and countries metadata
            //data: MOCKUP_DATA
          }));
        },
        (error) => {
          dispatch(errorFetchingData(error));
          dispatch(Notifications.showAlert({
            title: 'Terminal error',
            text: 'This is embarrasing but the app has crashed. Click the button to reload, in case this message is shown again, please let us know.'
          }));
        }
      )
    }
    catch (e) {
      dispatch(errorFetchingData(e));
    }
  }
}

function shouldFetchData(state) {
  const provider = state.provider;
  
  if (!provider.data) {
    return true;
  } else if (provider.loading) {
    return false;
  }
  return false;
}

export function fetchProviderData() {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchData());
    }
  }
};
