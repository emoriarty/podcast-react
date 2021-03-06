'use strict'

require('styles/lists/RadioItem.sass')

import React, { PropTypes } from 'react'

let RadioItem = (props) => {
  const indexName = 'list-option-' + props.index
  return (
    <li className="mdl-list__item">
      <span className="mdl-list__item-primary-content">
        {props.children}
      </span>
      <span className="mdl-list__item-secondary-action">
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect app-radio" for={indexName}>
          <input
            type="radio"
            id={indexName}
            className="mdl-radio__button"
            name="options"
            value={props.value}
            onChange={props.onSelect} />
        </label>
      </span>
    </li>
  )
}

RadioItem.displayName = 'ListsRadioItem'

// Uncomment properties you need
RadioItem.propTypes = {
  index: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  value: PropTypes.object,
  onSelect: PropTypes.func
}
// RadioItem.defaultProps = {}

export default RadioItem