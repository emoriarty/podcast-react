'use strict'

require('styles/lists/ExpandableItem.sass')

import React, { PropTypes } from 'react'
import Velocity from 'velocity-animate'

let ExpandableItem = (props) => {
  const expandableClassName = 'expandable-item__collapsable'
  
  let toggle = (ev) => {
    let siblingClasses = ev.currentTarget.nextSibling.classList
    siblingClasses.toggle('expanded')
    Velocity(ev.currentTarget.nextSibling, siblingClasses.contains('expanded') ? 'slideDown' : 'slideUp')
    Velocity(ev.currentTarget.querySelector('.material-icons'), {
      rotateZ: siblingClasses.contains('expanded') ? '180deg': '0'
    })
  }

  return (
    <li className="mdl-list__item expandable-item">
      <div className="expandable-item__fixed" onClick={toggle}>
        <span className="mdl-list__item-primary-content">
          {props.text}
        </span>
        <span className="mdl-list__item-secondary-action">
          <i className="material-icons">expand_more</i>
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