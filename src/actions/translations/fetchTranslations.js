import {FETCH_TRANSLATIONS, REQUEST_TRANSLATIONS, RECEIVE_TRANSLATIONS, ERROR_TRANSLATIONS} from './../const';
import {fetchTranslations} from '../../services/app';

function requestData() {
  return {
    type: REQUEST_TRANSLATIONS
  };
}

function receiveData(data) {
  return {
    type: RECEIVE_TRANSLATIONS,
    data,
    receivedAt: Date.now()
  };
}

function errorFetchingData() {
  return {
    type: ERROR_TRANSLATIONS
  };
}

function shouldFetchData(state) {
  const translations = state.translations;
  console.log('translations',translations)
  if (!translations.data) {
    return true;
  } else if (translations.loading) {
    return false;
  }
  return false;
}

function fetchData(language) {
  return dispatch => {
    dispatch(requestData());

    try {
      Promise.all([
        fetchTranslations(language)
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

export function fetchTranslationsData(language = navigator.language) {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchData(language));
    }
  }
}
