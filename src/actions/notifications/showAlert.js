import {SHOW_ALERT} from './../const';

module.exports = function(parameter) {
  console.log("SHOW ALERT ACTION", parameter);
  return { 
    type: SHOW_ALERT,
    alert: parameter
  };
};
