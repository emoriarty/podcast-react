require('material-design-lite/material.js');
require('material-design-lite/material.css');
require('normalize.css/normalize.css');
require('styles/App.sass');
// TODO try to install yui as a dependency
//require('yui/yui/yui.js');

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../config/configureStore';
import InitApp from './containers/InitAppComponent';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Home from './pages/HomePageComponent'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class AppComponent extends Component {
  render() {
    return (
      <Provider store={store}>
        <InitApp />
        { /* TODO import pagination here */ }
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            {/*<Route path="" component={Foo} />
            <Route path="bar" component={Bar} />*/}
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default AppComponent;
