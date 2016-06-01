/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import MessageDialogComponent from 'components/dialogs/MessageDialogComponent.js';

describe('MessageDialogComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(MessageDialogComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('messagedialog-component');
  });
});
