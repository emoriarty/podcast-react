import 'core-js/fn/object/assign'
import 'babel-polyfill'
import 'dialog-polyfill'
import { pleaseWait } from 'please-wait'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Main'

require('../node_modules/please-wait/build/please-wait.css');
const logo = require('./images/podcasts-app-256.png')


window.loadingScreen = pleaseWait({
  logo: logo,
  backgroundColor: '#1976D2',
  loadingHtml: '<div class="sk-rotating-plane">'
})

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
