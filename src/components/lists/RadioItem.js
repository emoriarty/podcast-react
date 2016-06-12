'use strict'

require('styles/containers/CountryPage.sass')

import React, { PropTypes } from 'react'

let RadioItem = (props) => {
  const indexName = "list-option-" + props.index
  return (
    <li className="mdl-list__item">
      <span className="mdl-list__item-primary-content">
        <i className="material-icons  mdl-list__item-avatar">person</i>
        {props.name}
      </span>
      <span className="mdl-list__item-secondary-action">
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for={indexName}>
          <input type="radio" id={indexName} className="mdl-radio__button" name="options" value={props.value} />
        </label>
      </span>
    </li>
  )
}

RadioItem.displayName = 'ListsRadioItem'

// Uncomment properties you need
RadioItem.propTypes = {
  index: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
}
// RadioItem.defaultProps = {}

export default RadioItem