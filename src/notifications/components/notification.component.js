import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Alert from './alert.component.jsx';
import * as notificationActionCreators from '../actions/notification.action';


class notificationContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.notification.alert)
      this.alert.el.showModal();
  }

  render() {
    return <Alert
      ref={ (ref) => this.alert = ref }
      {...this.props.notification.alert} />;
  }
}

const mapStateToProps = state => ({
  notification: state.notification,
});
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(notificationActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(notificationContainer);
