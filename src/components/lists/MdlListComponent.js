'use strict';

import React from 'react';

require('styles/lists/MdlList.sass');

let MdlListComponent = (props) => (
  <ul className="mdllist-component mdl-list">
    {props.children}
  </ul>
);

MdlListComponent.displayName = 'ListsMdlListComponent';

// Uncomment properties you need
// MdlListComponent.propTypes = {};
// MdlListComponent.defaultProps = {};

export default MdlListComponent;
