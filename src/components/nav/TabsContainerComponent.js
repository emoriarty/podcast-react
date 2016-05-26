'use strict';

import React from 'react';

import TabsComponent from './TabsComponent'
import TabPanelComponent from './TabPanelComponent'

require('styles/nav/TabsContainer.sass');

class TabsContainerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      views: [{
        id: 'home-panel',
        text: 'home',
        active: true
      },{
        id: 'trends-panel',
        text: 'Trends'
      },{
        id: 'podcasts-panel',
        text: 'Podcasts'
      },{
        id: 'settings-panel',
        text: 'Settings'
      }]
    };
  }

  render() {
    return (
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect tabs-component">
        <TabsComponent tabs={this.state.views} />

        {this.state.views.map((view) => (
           <TabPanelComponent key={view.id} data={view} />
        ))}
      </div>
    );
  }
}

TabsContainerComponent.displayName = 'NavTabsContainerComponent';

// Uncomment properties you need
// TabsContainerComponent.propTypes = {};
// TabsContainerComponent.defaultProps = {};

export default TabsContainerComponent;
