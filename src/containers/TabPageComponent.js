'use strict';

import React from 'react';

require('styles/pages/TabPage.sass');

class TabPageComponent extends React.Component {
  render() {
    let className = 'mdl-layout__tab-panel';
    if (this.props.data.active) className += ' is-active';

    return (
      <section id={this.props.data.id} className={className}>
        <div className="page-content">
          <h1>{this.props.data.title}</h1>
          {this.props.children}
        </div>
      </section>
    );
  }
}

TabPageComponent.displayName = 'PagesTabPageComponent';

// Uncomment properties you need
// TabPageComponent.propTypes = {};
// TabPageComponent.defaultProps = {};

export default TabPageComponent;
