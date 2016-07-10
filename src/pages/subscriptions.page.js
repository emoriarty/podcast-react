'use strict';
require('styles/pages/SubscriptionsPage.sass');

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NotificationActions from '../actions/notification.action'

class SubscriptionsPage extends Component {
  componentWillReceiveProps(nextProps) {
    // TODO Check when state has changed and then save into the DB
  }

  render() {
    let className = 'mdl-layout__tab-panel subscriptionspage-component mdl-grid';
    if (!this.props.params.page) className += ' is-active';

    return (
      <section id="subscriptions" className={className}>
        <h2>Subscriptions</h2>
      </section>
    );
  }
}

SubscriptionsPage.displayName = 'ContainersSubscriptionsPage';

// Uncomment properties you need
SubscriptionsPage.propTypes = {
  data: PropTypes.object.isRequired
};
// SubscriptionsPage.defaultProps = {};

const mapStateToProps = state => {
  const { provider, subscriptions } = state
  return {
    data: provider.data,
    subscriptions : subscriptions
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(NotificationActions, dispatch),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionsPage);
