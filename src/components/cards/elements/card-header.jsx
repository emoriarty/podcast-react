'use strict';

import React from 'react';

require('styles/cards/CardHeader.sass');

let CardHeaderComponent = (props) => (
  <div className="cardheader-component mdl-card__title">
    <h2 className="mdl-card__title-text">{props.title}</h2>
  </div>
);

CardHeaderComponent.displayName = 'CardsCardHeaderComponent';

// Uncomment properties you need
// CardHeaderComponent.propTypes = {};
// CardHeaderComponent.defaultProps = {};

export default CardHeaderComponent;
