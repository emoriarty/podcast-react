'use strict';

import React from 'react';

require('styles/nav/Header.sass');

let HeaderComponent = (props) => (
  <header className="header-component mdl-layout__header">

    <div className="mdl-layout--large-screen-only mdl-layout__header-row">
      <span className="mdl-layout-title">{props.title}</span>
    </div>

    {props.children}

  </header>
);

HeaderComponent.displayName = 'NavHeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
