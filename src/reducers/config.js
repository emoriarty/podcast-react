/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {FETCH_CONFIG, REQUEST_CONFIG, RECEIVE_CONFIG, ERROR_CONFIG} from '../actions/const'

const initialState = {
  config: {
    ready: false,
    loading: false,
    fail: false
  }
};

function checkFetchActions(state, action) {
  switch(action.type) {
    case REQUEST_CONFIG:
      return {
        ready: false,
        loading: true,
        fail: false
      }
    case RECEIVE_CONFIG:
      return {
        ready: true,
        loading: false,
        fail: false,
        ...action.data
      }
    case ERROR_CONFIG:
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
    case REQUEST_CONFIG:
    case RECEIVE_CONFIG:
    case ERROR_CONFIG: 
      return checkFetchActions(state, action);
    default: 
      return state;
  }
}
