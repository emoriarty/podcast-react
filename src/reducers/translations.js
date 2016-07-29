/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {REQUEST_TRANSLATIONS, RECEIVE_TRANSLATIONS, ERROR_TRANSLATIONS} from '../actions/const'

const initialState = {
  ready: false,
  loading: false,
  fail: false
};

function checkFetchActions(state, action) {
  switch(action.type) {
    case REQUEST_TRANSLATIONS:
      return {
        ready: false,
        loading: true,
        fail: false
      }
    case RECEIVE_TRANSLATIONS:
      return {
        ready: true,
        loading: false,
        fail: false,
        data: action.data
      }
    case ERROR_TRANSLATIONS:
      return {
        ready: false,
        loading: false,
        fail: true
      }
  }
}

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    case REQUEST_TRANSLATIONS:
    case RECEIVE_TRANSLATIONS:
    case ERROR_TRANSLATIONS: 
      return checkFetchActions(state, action);
    default: 
      return state;
  }
}
