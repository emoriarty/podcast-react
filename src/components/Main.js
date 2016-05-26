require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import LayoutTabs from './nav/LayoutTabsComponent';


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
