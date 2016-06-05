import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Alert from './alert.component.jsx';
import * as notificationActionCreators from '../actions/notification.action';


class notificationContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.alert.el.showModal();
  }

  getMessage() {
    let message = this.props.notification.text;
    return message;
  }

  render() {
    const message = this.getMessage();
    return <Alert
      ref={ (ref) => this.alert = ref }
      {...this.props}
      message={message} />;
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
