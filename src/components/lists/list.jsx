'use strict';

import React from 'react';

require('styles/lists/List.sass');

let ListContainer = (props) => (
  <ul className="list-component mdl-list">
    {props.children}
  </ul>
);

ListContainer.displayName = 'ListsListContainer';

// Uncomment properties you need
// ListContainer.propTypes = {};
// ListContainer.defaultProps = {};

export default ListContainer;
