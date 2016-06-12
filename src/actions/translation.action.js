import {
  REQUEST_TRANSLATIONS,
  RECEIVE_TRANSLATIONS,
  ERROR_TRANSLATIONS
} from './types/translation.types'
import {
  fetchTranslations
} from '../services/translations.service'
import {
  fetchMediaTypesTranslations,
  fetchCommonTranslations
} from '../services/itunes.service'
import * as Notifications from './notification.action'

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
  if (!data.data) {
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
        fetchTranslations(language),
        fetchCommonTranslations(language),
        fetchMediaTypesTranslations(language)
      ])
      .then(
        (result) => {
          dispatch(receiveData({
            app: result[0].results,
            commons: result[1],
            mediaTypes: result[2]
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
export function fetchTranslationsData(language = navigator.language) {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchData(language));
    }
  }
}
