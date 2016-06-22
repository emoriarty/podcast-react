'use strict'

//require('styles/containers/Init.sass')

import $ from 'jquery'
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Root from './root.abstract'
import Notification from '../components/notifications/notification.component'
import * as NotificationActions from '../actions/notification.action'
import BasicLayout from '../components/layouts/basic.layout'

class Init extends Root {
  constructor(props) {
    super(props)
  }

  /*componentDidMount() {
    let els = document.getElementsByClassName('mdl-js-layout');
    Array.prototype.forEach.call(els, (el) => (
      window.componentHandler.upgradeElement(el, 'MaterialLayout')
    ));
  }*/
  
  componentWillReceiveProps(nextProps) {
    if (!$.isEmptyObject(nextProps.country)) {
      this.context.router.push('/')
    }
    super.componentWillReceiveProps(nextProps)
  }

  render() {
    const { provider, translations } = this.props

    return (
      <div className="index">

        <Notification />

        { provider.ready && translations.ready &&
          <BasicLayout appName={translations.app.appName}>
            { this.props.children }
          </BasicLayout> }

      </div>
    );
  }
}

Init.displayName = 'ContainersInit';

// Uncomment properties you need

Init.propTypes = {
  provider: PropTypes.object.isRequired
}

Init.contextTypes = {
  router: PropTypes.object
}
// Init.defaultProps = {};

const mapStateToProps = state => {
  const { provider, translations, country } = state

  return {
    provider,
    translations,
    country
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(NotificationActions, dispatch),
    dispatch
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Init)
