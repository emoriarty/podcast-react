'use strict';

import React, { PropTypes } from 'react';

import Card from '../cards/CardComponent';
import CardHeader from '../cards/CardHeaderComponent';
import CardBody from '../cards/CardBodyComponent';
import CardActions from '../cards/CardActionsComponent';
import CardMenu from '../cards/CardMenuComponent';
import List from '../lists/ListComponent';
import PodcastListItem from '../lists/PodcastListItemComponent';

require('styles/pages/HomePage.sass');

class HomePageComponent extends React.Component {
  render() {
    let className = 'mdl-layout__tab-panel homepage-component mdl-grid';
    if (this.props.data.active) className += ' is-active';

    return (
      <section id={this.props.data.id} className={className}>
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

HomePageComponent.displayName = 'PagesHomePageComponent';

// Uncomment properties you need
HomePageComponent.propTypes = {
  data: PropTypes.object.isRequired
};
// HomePageComponent.defaultProps = {};

export default HomePageComponent;
