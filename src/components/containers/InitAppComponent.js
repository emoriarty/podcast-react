'use strict'

require('styles/containers/InitApp.sass')

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchInitialData } from '../../actions/InitApp'
import LayoutTabs from '../layouts/TabsComponent'

class InitAppComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, coreData } = this.props
    dispatch(fetchInitialData())
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      console.log(data);
    }
    else {
      // Show an error
    }
  }

  render() {
    const { coreData } = this.props
    return (
      <div className="index">
        <LayoutTabs coreData={coreData} />
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

function mapStateToProps(state) {
  const { coreData } = state

  return {
    coreData
  }
}

export default connect(mapStateToProps)(InitAppComponent)