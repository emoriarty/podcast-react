'use strict';

import React, {PropTypes} from 'react';
// Components
import Header from '../nav/HeaderComponent';

require('styles/layouts/Basic.sass');

class BasicComponent extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">

        <Header title={this.props.title} />
        
        <main className="mdl-layout__content">
          {this.props.children}
        </main>

      </div>
    );
  }
}

BasicComponent.displayName = 'LayoutsBasicComponent';

// Uncomment properties you need
BasicComponent.propTypes = {
  title: PropTypes.string.isRequired
};
// BasicComponent.defaultProps = {};

export default BasicComponent;
