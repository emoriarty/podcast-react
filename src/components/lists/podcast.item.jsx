'use strict';

import React from 'react';

require('styles/lists/PodcastListItem.sass');

let PodcastListItemComponent = (props) => (
  <li className="podcastlistitem-component mdl-list__item">
    <span className="mdl-list__item-primary-content">
      <img className="card-icon" src={props.icon} />
      <span>{props.name}</span>
    </span>
    <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
  </li>
);

PodcastListItemComponent.displayName = 'ListsPodcastListItemComponent';

// Uncomment properties you need
// PodcastListItemComponent.propTypes = {};
// PodcastListItemComponent.defaultProps = {};

export default PodcastListItemComponent;
