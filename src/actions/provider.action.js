import * as Notifications from '../notifications/actions/notification.action'
import {
  fetchMediaTypes, 
  fetchCountries, 
  fetchMediaTypesTranslations, 
  fetchCommonTranslations
} from '../services/itunes.service'
import {
  fetchTranslations
} from './translation.action'
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
