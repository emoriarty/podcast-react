'use strict';

import React from 'react';

require('styles/nav/Drawer.sass');

let DrawerComponent = (props) => (
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">{props.title}</span>
  </div>
);

DrawerComponent.displayName = 'NavDrawerComponent';

// Uncomment properties you need
// DrawerComponent.propTypes = {};
// DrawerComponent.defaultProps = {};

export default DrawerComponent;
