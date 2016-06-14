'use strict'

require('styles/lists/ExpandableItem.sass')

import React, { PropTypes } from 'react'

let ExpandableItem = (props) => {
  const indexName = "list-option-" + props.index
  const expandableClassName = 'expandable-item__collapsable'
  
  let toggle = (ev) => {
    ev.currentTarget.nextSibling.classList.toggle('expanded')
  }

  return (
    <li className="mdl-list__item expandable-item">
      <div className="expandable-item__fixed" onClick={toggle}>
        <span className="mdl-list__item-primary-content">
          {props.text}
        </span>
        <span className="mdl-list__item-secondary-action">
          <i className="material-icons mdl-list__item-avatar">person</i>
        </span>
      </div>
      <div className={expandableClassName}>
        {props.children}
      </div>
    </li>
  )
}

ExpandableItem.displayName = 'ListsExpandableItem'

// Uncomment properties you need
ExpandableItem.propTypes = {
  text: PropTypes.string
}
// ExpandableItem.defaultProps = {}

export default ExpandableItem