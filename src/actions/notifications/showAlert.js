import {SHOW_ALERT} from './../const';

module.exports = function(parameter) {
  return { 
    type: SHOW_ALERT,
    alert: { 
      parameter
    } 
  };
};
