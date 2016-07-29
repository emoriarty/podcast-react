'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Alert from './AlertComponent';
import * as NotificationActios from '../../actions/notifications';

require('styles/notifications/Notification.sass');

class NotificationComponent extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.notifications.alert)
      this.alert.el.showModal();
  }

  render() {
    return <Alert
      ref={ (ref) => this.alert = ref }
      {...this.props.notifications.alert} />;
  }
}

NotificationComponent.displayName = 'NotificationsNotificationComponent';

// Uncomment properties you need
// NotificationComponent.propTypes = {};
// NotificationComponent.defaultProps = {};

const mapStateToProps = state => ({
  notifications: state.notifications
});
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(NotificationActios, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationComponent);
