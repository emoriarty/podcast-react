'use strict'

//require('styles/containers/Init.sass')

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Root from './RootAbstract'
import Notification from '../components/notifications/notification.component'
import * as NotificationActions from '../actions/notification.action'
import BasicLayout from '../components/layouts/Basic'

class Init extends Root {
  /*componentDidMount() {
    let els = document.getElementsByClassName('mdl-js-layout');
    Array.prototype.forEach.call(els, (el) => (
      window.componentHandler.upgradeElement(el, 'MaterialLayout')
    ));
  }*/

  render() {
    const { provider, translations } = this.props

    return (
      <div className="index">

        <Notification />

        { provider.ready && 
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
// Init.defaultProps = {};

const mapStateToProps = state => {
  const { provider, translations } = state

  return {
    provider,
    translations
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(NotificationActions, dispatch),
    dispatch
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Init)
