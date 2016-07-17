'use strict';

import React, {PropTypes}  from 'react';

require('styles/nav/Header.sass');

class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="header-component mdl-layout__header">

        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">{this.props.title}</span>
        </div>

        {this.props.children}

      </header>
    );
  }
}

HeaderComponent.displayName = 'NavHeaderComponent';

// Uncomment properties you need
HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired
};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
