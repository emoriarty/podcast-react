require('material-design-lite/material.js');
require('material-design-lite/material.css');
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import LayoutTabs from './layouts/TabsComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <LayoutTabs />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
