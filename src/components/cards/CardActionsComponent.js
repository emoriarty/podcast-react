'use strict';

import React from 'react';

require('styles/cards/CardActions.sass');

let CardActionsComponent = (props) => (
  <div className="cardactions-component mdl-card__actions mdl-card--border">
    {props.children}
  </div>
);

CardActionsComponent.displayName = 'CardsCardActionsComponent';

// Uncomment properties you need
// CardActionsComponent.propTypes = {};
// CardActionsComponent.defaultProps = {};

export default CardActionsComponent;
