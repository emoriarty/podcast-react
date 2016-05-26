'use strict';

import React from 'react';

require('styles/nav/Tabs.sass');

let TabsComponent = (props) => {
  let tabs = props.tabs.map((tab) => {
    let className = 'mdl-tabs__tab';
    if (tab.active) className += ' is-active';

    return <a key={tab.id} href={'#' + tab.id} className={className}>{tab.text}</a>
  });
    
  return (
    <div className="mdl-tabs__tab-bar">
      {tabs}
    </div>
  );
};

TabsComponent.displayName = 'NavTabsComponent';

// Uncomment properties you need
// TabsComponent.propTypes = {};
// TabsComponent.defaultProps = {};

export default TabsComponent;
