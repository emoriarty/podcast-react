'use strict';

import React from 'react';

require('styles/cards/Card.sass');

let CardComponent = (props) => (
  <div className="card-component mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
    {props.children}
  </div>
);

CardComponent.displayName = 'CardsCardComponent';

// Uncomment properties you need
// CardComponent.propTypes = {};
// CardComponent.defaultProps = {};

export default CardComponent;
