'use strict';

import React from 'react';

require('styles/cards/CardBody.sass');

let CardBodyComponent = (props) => (
  <div className="cardbody-component mdl-card__supporting-text">
    {props.children}
  </div>
);

CardBodyComponent.displayName = 'CardsCardBodyComponent';

// Uncomment properties you need
// CardBodyComponent.propTypes = {};
// CardBodyComponent.defaultProps = {};

export default CardBodyComponent;
