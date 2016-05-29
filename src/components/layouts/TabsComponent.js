'use strict';

import React from 'react';

import Header from '../nav/HeaderComponent';
import HeaderTabs from '../tabs/HeaderTabsComponent';
import Pages from './TabPagesComponent';
import Page from '../pages/TabPageComponent';
import HomePage from '../pages/HomePageComponent';

require('styles/layouts/Tabs.sass');

const yeomanImage = require('../../images/yeoman.png');


class TabsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appName: 'Podcaster',
      pages: [{
        id: 'home',
        title: 'Home',
        active: true
      }, {
        id: 'podcasts',
        title: 'My podcasts'
      }, {
        id: 'trends',
        title: 'Last trends'
      }, {
        id: 'settings',
        title: 'Settings'
      }]
    };
  }

  //componentDidMount() {
    //debugger;
    //let els = document.getElementsByClassName('mdl-js-layout');
    //Array.prototype.forEach.call(els, (el) => (
      //window.componentHandler.upgradeElement(el, 'MaterialLayout')
    //));
  //}

  render() {
    return (
      <div className="tabs-component mdl-layout mdl-js-layout mdl-layout--fixed-header">

        <Header title={this.state.appName}>
          <HeaderTabs pages={this.state.pages} />
        </Header>

        <Pages>
          {this.state.pages.map((page) => {
            switch(page.id) {
              case 'home':
                return <HomePage key={page.id} data={page} />;
              default:
                return (
                  <Page key={page.id} data={page}>
                    <img src={yeomanImage} alt="Yeoman Generator" />
                  </Page>
                );
            };
          })}
        </Pages>

      </div>
    );
  }
}

TabsComponent.displayName = 'LayoutsTabsComponent';

// Uncomment properties you need
// TabsComponent.propTypes = {};
// TabsComponent.defaultProps = {};

export default TabsComponent;
