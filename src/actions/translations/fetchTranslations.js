import {FETCH_TRANSLATIONS, REQUEST_TRANSLATIONS, RECEIVE_TRANSLATIONS, ERROR_TRANSLATIONS} from './../const';
import {fetchTranslations} from '../../services/app';
import {fetchMediaTypesTranslations, fetchCommonTranslations} from '../../services/itunes';
import * as Notifications from '../notifications';

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
        fetchTranslations(language),
        fetchCommonTranslations(language),
        fetchMediaTypesTranslations(language)
      ])
      .then(
        (result) => {
          console.log(result);
          dispatch(receiveData({
            app: result[0].results,
            commons: result[1],
            mediaTypes: result[2]
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
      dispatch(Notifications.showAlert({
        title: 'Terminal error',
        text: 'Could not be retrieved translations texts.'
      }));
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
