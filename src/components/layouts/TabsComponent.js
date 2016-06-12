'use strict';

import React, { PropTypes } from 'react';

import Header from '../nav/Header';
import HeaderTabs from '../tabs/HeaderTabsComponent';
import Pages from './TabPagesComponent';

require('styles/layouts/Tabs.sass');



class TabsComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    //let els = document.getElementsByClassName('mdl-js-layout');
    //Array.prototype.forEach.call(els, (el) => (
      //window.componentHandler.upgradeElement(el, 'MaterialLayout')
    //));
  }

  render() {
    const { appName, pages } = this.props;

    return (
      <div className="tabs-component mdl-layout mdl-js-layout mdl-layout--fixed-header">

        <Header title={appName}>
          <HeaderTabs pages={pages} />
        </Header>

        <Pages>
          {this.props.children}
        </Pages>

      </div>
    );
  }
}

TabsComponent.displayName = 'LayoutsTabsComponent';

// Uncomment properties you need
TabsComponent.propTypes = {
  appName: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired
};
// TabsComponent.defaultProps = {};

export default TabsComponent;
