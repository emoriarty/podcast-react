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

const store = configureStore();

class AppComponent extends Component {
  render() {
    return (
      <Provider store={store}>
        <InitApp />
      </Provider>
    );
  }
}

export default AppComponent;
