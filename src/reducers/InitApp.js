import fetch from 'isomorphic-fetch'

import { INIT_APP } from '../actions/InitApp';

const initialState = {
  ready: false,
  loading: false
}


function initApp(state, action) {
  
}

export const InitApp = (state = initialState, action) => { 
  switch(action.type) {
    case INIT_APP: 
      return initApp(state, action);
    default:
      return state;
  }
}

