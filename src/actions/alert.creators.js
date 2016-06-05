/**
 * arguments:
 *   data { title: string, message: string, action: func }
 */
export function showAlertCrash({title, message, action}) {

  return {
    type: SHOW_ALERT_CRASH,
    alert: { title, message, action }
  }
}
