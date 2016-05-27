'use strict';

import React from 'react';

import Tab from './HeaderTabComponent';

require('styles/tabs/HeaderTabs.sass');

let HeaderTabsComponent = (props) => {
  let tabs = props.pages.map((page) => (<Tab key={page.id} active={page.active} id={page.id} name={page.title} />));

  return (
    <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
      {tabs}
    </div>
  );
};

HeaderTabsComponent.displayName = 'TabsHeaderTabsComponent';

// Uncomment properties you need
// HeaderTabsComponent.propTypes = {};
// HeaderTabsComponent.defaultProps = {};

export default HeaderTabsComponent;
