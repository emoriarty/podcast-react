require('material-design-lite/material.js')
require('material-design-lite/material.css')
require('normalize.css/normalize.css')
require('styles/App.sass')
require('../node_modules/please-wait/build/please-wait.css')
// TODO try to install yui as a dependency
//require('yui/yui/yui.js');

import 'core-js/fn/object/assign'
import 'babel-polyfill'
import 'dialog-polyfill'

import React from 'react'
import configureStore from './config/configureStore';
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { pleaseWait } from 'please-wait'
import { Provider } from 'react-redux'
//App container
import App from './containers/App'
//Pages
import Home from './containers/HomePage'

const logo    = require('./images/podcasts-app-256.png')
const store   = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

// Splash screen
window.loadingScreen = pleaseWait({
  logo: logo,
  backgroundColor: '#1976D2',
  loadingHtml: '<div class="sk-rotating-plane">'
})

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        {/*<Route path="/:page" component={Foo} />} Component which renders the rest of the pages*/}
        {/*<Route path="" component={Foo} />
        <Route path="bar" component={Bar} />*/}
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('app')
)
