'use strict';

import React from 'react';

require('styles/tabs/HeaderTab.sass');

let HeaderTabComponent = (props) => {
  let className = 'mdl-layout__tab';
  if (props.active) className += ' is-active';

  return <a href={'#' + props.id} className={className}>{props.name}</a>;
};

HeaderTabComponent.displayName = 'TabsHeaderTabComponent';

// Uncomment properties you need
// HeaderTabComponent.propTypes = {};
// HeaderTabComponent.defaultProps = {};

export default HeaderTabComponent;
