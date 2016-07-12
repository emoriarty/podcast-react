//Globals
import 'material-design-lite/material.js';
import 'material-design-lite/material.css';
import 'styles/App.sass';
import 'core-js/fn/object/assign';
import 'babel-polyfill';
import 'dialog-polyfill';
import '../node_modules/please-wait/build/please-wait.css';

//React + relatives
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
//3rd libs
import { pleaseWait } from 'please-wait'
//Store
import configureStore from './stores';
//Containers
import App from './containers/App';
import Main from './containers/Main';
import FirstTime from './containers/FirstTime';
//Pages
import HomePage from './components/pages/HomeComponent';
import SubscriptionsPage from './components/pages/SubscriptionsComponent';
import TrendsPage from './components/pages/TrendsComponent';
import CountriesPage from './components/pages/CountriesComponent';

const logo = require('./images/podcasts-app-256.png');
const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store)

// Splash screen
window.loadingScreen = pleaseWait({
  logo: logo,
  backgroundColor: '#1976D2',
  loadingHtml: '<div class="sk-rotating-plane">'
});

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route component={Main}>
          <IndexRoute component={HomePage} />
          <Route path="subscriptions" component={SubscriptionsPage} />
          <Route path="trends" component={TrendsPage} />
        </Route>
        <Route path="first-time" component={FirstTime}>
          <Route path="/first-time/country" component={CountriesPage} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
