
// It means setting the body background in $primary-color-dark
export const SHOW_TERMINAL_ERROR = 'SHOW_TERMINAL_ERROR'
export const CLEAN_MESSAGE = 'CLEAN_MESSAGE'
/**
 * arguments:
 *   data { title: string, message: string, action: func }
 */
export function showTerminalError(data) {
  return {
    type: SHOW_TERMINAL_ERROR,
    title: data.title,
    message: data.message,
    action: data.action
  }
}

export function cleanMessage() {
  return {
    type: CLEAN_MESSAGE
  }
}
