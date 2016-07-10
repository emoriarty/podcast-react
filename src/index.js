//Globals
import 'material-design-lite/material.js';
import 'material-design-lite/material.css';
import 'styles/App.sass';
import 'core-js/fn/object/assign';
import 'babel-polyfill';
import 'dialog-polyfill';

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
import FirstTime from './containers/FirstTime';

const logo = require('./images/podcasts-app-256.png');
const store = configureStore();

// Splash screen
window.loadingScreen = pleaseWait({
  logo: logo,
  backgroundColor: '#1976D2',
  loadingHtml: '<div class="sk-rotating-plane">'
});

render(
  <Provider store={store}>
    <Router history={history}>
      {/*<Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="subscriptions" component={Subscriptions} />
        <Route path="/:page" component={Foo} />} Component which renders the rest of the pages
        <Route path="" component={Foo} />
        <Route path="bar" component={Bar} />
      </Route>*/}
      <Route path="/" component={FirsTime}>
        <Route path="/country" component={Country} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
