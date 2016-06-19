'use strict';

import React from 'react';

require('styles/cards/CardMenu.sass');

let CardMenuComponent = (props) => (
  <div className="cardmenu-component mdl-card__menu">
    {props.children}
  </div>
);

CardMenuComponent.displayName = 'CardsCardMenuComponent';

// Uncomment properties you need
// CardMenuComponent.propTypes = {};
// CardMenuComponent.defaultProps = {};

export default CardMenuComponent;
