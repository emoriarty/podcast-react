'use strict';
require('styles/pages/HomePage.sass');

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NotificationActions from '../actions/notification.action'

import Card from '../components/cards/CardComponent';
import CardHeader from '../components/cards/CardHeaderComponent';
import CardBody from '../components/cards/CardBodyComponent';
import CardActions from '../components/cards/CardActionsComponent';
import CardMenu from '../components/cards/CardMenuComponent';
import List from '../components/lists/ListComponent';
import PodcastListItem from '../components/lists/PodcastListItemComponent';

class HomePage extends Component {
  render() {
    console.log('Home', this.props.params)
    console.log('HOME', this.props.data)
    let className = 'mdl-layout__tab-panel homepage-component mdl-grid';
    if (!this.props.params.page) className += ' is-active';

    return (
      <section id="home" className={className}>
        <Card>
          <CardHeader title="Top Five" />
          <CardBody>
            <List>
              { this.props.data.data.topodcasts.map(item =>
                <PodcastListItem key={item.id} name={item.name} icon={item.icon} />) }
            </List>
          </CardBody>
          <CardActions>
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </a>
          </CardActions>
          <CardMenu>
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">share</i>
            </button>
          </CardMenu>
        </Card>
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
  console.log('state', state)
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
