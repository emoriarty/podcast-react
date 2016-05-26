'use strict';

import React from 'react';

require('styles/nav/TabPanel.sass');

let TabPanelComponent = (props) => {
  let className = 'mdl-tabs__panel';

  if (props.data.active) className += ' is-active';

  return (
    <div className={className} id={props.data.id}>
      <h2>{props.data.text} view</h2>
    </div>
  );
  
};

TabPanelComponent.displayName = 'NavTabPanelComponent';

// Uncomment properties you need
// TabViewsComponent.propTypes = {};
// TabViewsComponent.defaultProps = {};

export default TabPanelComponent;
