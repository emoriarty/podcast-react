'use strict'

require('styles/containers/InitApp.sass')

import React, { Component, PropTypes } from 'react'
import { fetchInitialData } from '../../actions/InitApp'
import LayoutTabs from '../layouts/TabsComponent'

class InitAppComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchInitialDat())
  }

  render() {
    const { coreData } = this.props
    return (
      <div className="index">
        <LayoutTabs data={coreData} />
      </div>
    );
  }
}

InitAppComponent.displayName = 'ContainersInitAppComponent';

// Uncomment properties you need

InitAppComponent.propTypes = {
  coreData: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}
// InitAppComponent.defaultProps = {};

export default InitAppComponent
