'use strict';

import React, {PropTypes} from 'react';

require('styles/lists/MdlSwitchItem.sass');

class MdlSwitchItemComponent extends React.Component {
    render() {
      return (
        <li className="mdlswitchitem-component mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons  mdl-list__item-avatar">person</i>
            {this.props.title}
          </span>
            <span className="mdl-list__item-secondary-action">
              <label ref="switch" className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor={this.props.id}>
                <input type="checkbox" id={this.props.id} className="mdl-switch__input" />
              </label>
          </span>
        </li>
      );
    }

    componentDidMount() {
      //When you are creating DOM elements dynamically you need to register new elements using the upgradeElement function
      componentHandler.upgradeElement(this.refs.switch);
    }
}

MdlSwitchItemComponent.displayName = 'ListsMdlSwitchItemComponent';

// Uncomment properties you need
MdlSwitchItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
// MdlSwitchItemComponent.defaultProps = {};

export default MdlSwitchItemComponent;
