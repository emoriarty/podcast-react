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
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { pleaseWait } from 'please-wait'
import { Provider } from 'react-redux'
// Services
import SubscriberStore from './utils/subscriber-store'
import * as DB from './services/storage.service'
//App container
import App from './containers/app'
import FirsTime from './containers/first-time'
//Pages
import Home from './pages/home.page'
import Subscriptions from './pages/subscriptions.page'
import Country from './pages/countries.page'

const logo       = require('./images/podcasts-app-256.png')
const store      = configureStore()
const history    = syncHistoryWithStore(hashHistory, store)
const subscriber = new SubscriberStore(store)

// Observe store
subscriber.subscribe({
  onNext: ({subscriptions}) => {
    DB.store(DB.SUBSCRIPTIONS_KEY, subscriptions)
  }
})

// Splash screen
window.loadingScreen = pleaseWait({
  logo: logo,
  backgroundColor: '#1976D2',
  loadingHtml: '<div class="sk-rotating-plane">'
})

/*window.google.load('feeds', '1')
window.google.setOnLoadCallback(function() {
  console.log('Feed loaded')
  window.feedAPI = true
})*/

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="subscriptions" component={Subscriptions} />
        {/*<Route path="/:page" component={Foo} />} Component which renders the rest of the pages*/}
        {/*<Route path="" component={Foo} />
        <Route path="bar" component={Bar} />*/}
      </Route>
      <Route path="/first-time" component={FirsTime}>
        <Route path="/first-time/country" component={Country} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)