import {
  REQUEST_TRANSLATIONS,
  RECEIVE_TRANSLATIONS,
  ERROR_TRANSLATIONS
} from './types/translation.types'
import {
  fetchTranslations
} from '../services/translations.service'

function requestData() {
  return {
    type: REQUEST_TRANSLATIONS
  }
}

function receiveData(data) {
  return {
    type: RECEIVE_TRANSLATIONS,
    data,
    receivedAt: Date.now()
  }
}

function errorFetchingData() {
  return {
    type: ERROR_TRANSLATIONS
  }
}

function shouldFetchData(state) {
  const data = state.translations;
  if (!data) {
    return true
  } else if (data.loading) {
    return false
  }

  return false
}

function fetchData(language) {
  return dispatch => {
    dispatch(requestData())

    try {
      Promise.all([
        fetchTranslations(language)
      ])
      .then(
        (result) => {
          dispatch(receiveData({
            commons: result[0], // common values
            countries: result[1] // countries metadata
          }))
        },
        (error) => {
          dispatch(errorFetchingData(error))
          dispatch(Notifications.showAlert({
            title: 'Terminal error',
            text: 'Could not be retrieved translations texts.',
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
export function fetchTranslations(language = navigator.language) {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchData());
    }
  }
}
