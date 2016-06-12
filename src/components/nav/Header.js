'use strict';

import React from 'react';

require('styles/nav/Header.sass');

let Header = (props) => (
  <header className="header-component mdl-layout__header">

    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">{props.title}</span>
    </div>

    {props.children}

  </header>
);

Header.displayName = 'NavHeader';

// Uncomment properties you need
// Header.propTypes = {};
// Header.defaultProps = {};

export default Header;
