'use strict';

import React from 'react';

require('styles/layouts/TabPages.sass');

let TabPagesComponent = (props) => (
  <main className="mdl-layout__content">
    {props.children}
  </main>
);

TabPagesComponent.displayName = 'LayoutsTabPagesComponent';

// Uncomment properties you need
// TabPagesComponent.propTypes = {};
// TabPagesComponent.defaultProps = {};

export default TabPagesComponent;
