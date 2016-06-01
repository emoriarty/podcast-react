import {
  TERMINAL_ERROR
} from '../actions/Errors'


function changeBodyBackground(className) {
  document.body.className += (' ' + className)
}

export const ShowError = (state = {}, action) => {
  console.log('ShowError', action)
  switch(action.type) {
    case TERMINAL_ERROR:
      changeBodyBackground('terminal-error')
      return {
        ...state,
        terminal: true
      }
    default:
      return state
  }
}
