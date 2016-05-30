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
        active: true,
        data: {
          topodcasts: [{
            id: 1,
            name: 'La órbita de Endor',
            icon: '//cdn.webstatics.net/podcast/podcastimage_477376.gif'
          }, {
            id: 2,
            name: 'Todopoderosos',
            icon: '//pbs.twimg.com/profile_images/565955444963692544/wXLomgB-.jpeg'
          }, {
            id: 3,
            name: 'La rosa de los vientos',
            icon: '//epg.ondacero.es/static/images/sections/section_1002825.png'
          }, {
            id: 4,
            name: 'Negra y criminal',
            icon: '//cdn.webstatics.net/podcast/podcastimage_477376.gif'
          }, {
            id: 5,
            name: 'Carne cruda',
            icon: '//lareplica.es/wp-content/uploads/2015/07/Carne_cruda_logo.jpg'
          }]
        }
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

  componentDidMount() {
    //let els = document.getElementsByClassName('mdl-js-layout');
    //Array.prototype.forEach.call(els, (el) => (
      //window.componentHandler.upgradeElement(el, 'MaterialLayout')
    //));
  }

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
            }
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
