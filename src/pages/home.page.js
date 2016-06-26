'use strict';
require('styles/pages/HomePage.sass');

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NotificationActions from '../actions/notification.action'

import TopPodcastsCard from '../components/cards/top-podcasts.card'

class HomePage extends Component {
  componentWillReceiveProps(nextProps) {
    // TODO Check when state has changed and then save into the DB
  }

  render() {
    let className = 'mdl-layout__tab-panel homepage-component mdl-grid';
    if (!this.props.params.page) className += ' is-active';

    return (
      <section id="home" className={className}>
        <TopPodcastsCard/>
      </section>
    );
  }
}

HomePage.displayName = 'ContainersHomePage';

// Uncomment properties you need
HomePage.propTypes = {
  data: PropTypes.object.isRequired
};
// HomePage.defaultProps = {};

const mapStateToProps = state => {
  const { provider } = state
  return {
    data: provider.data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(NotificationActions, dispatch),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
