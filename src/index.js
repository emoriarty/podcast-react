import 'core-js/fn/object/assign';
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import App from './components/Main';


// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
