'use strict';

import React from 'react';

require('styles/lists/List.sass');

let ListComponent = (props) => (
  <ul className="list-component mdl-list">
    {props.children}
  </ul>
);

ListComponent.displayName = 'ListsListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
