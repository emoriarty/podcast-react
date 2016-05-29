/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import CardBodyComponent from 'components/cards/CardBodyComponent.js';

describe('CardBodyComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(CardBodyComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('cardbody-component');
  });
});
