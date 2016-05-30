require('material-design-lite/material.js');
require('material-design-lite/material.css');
require('normalize.css/normalize.css');
require('styles/App.sass');

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../config/configureStore';
import InitApp from './containers/InitAppComponent';

const store = configureStore();

class AppComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <InitApp />
      </Provider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
