'use strict';

import React,{ PropTypes } from 'react'
import Header from '../nav/Header'

let Basic = (props) => {
  console.log('BASIC', props)
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">

      <Header title={props.appName} />
      
      <main className="mdl-layout__content">
        {props.children}
      </main>

    </div>
  )
}

Basic.displayName = 'LayoutsBasic';

// Uncomment properties you need
Basic.propTypes = {
  appName: PropTypes.string.isRequired,
  pages: PropTypes.array
};
// BasicLayout.defaultProps = {};

export default Basic;