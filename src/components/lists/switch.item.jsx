'use strict'

require('styles/lists/SwitchItem.sass')

import React, { PropTypes } from 'react'

let SwitchItem = (props) => {
  console.log('props.checked', props.checked)
  const indexName = 'list-option-' + props.value

  return (
    <li className="mdl-list__item switch-item">
      <span className="mdl-list__item-primary-content primary-content">
        {props.children}
      </span>
      <span className="mdl-list__item-secondary-action secondary-action">
        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect app-swicth" for={indexName}>
          <input
            type="checkbox"
            id={indexName}
            className="mdl-switch__input"
            name="options"
            value={props.value}
            checked={props.checked}
            onChange={props.onSelect} />
        </label>
      </span>
    </li>
  )
}

SwitchItem.displayName = 'ListsSwitchItem'

// Uncomment properties you need
SwitchItem.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onSelect: PropTypes.func
}
// SwitchItem.defaultProps = {}

export default SwitchItem