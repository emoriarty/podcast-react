'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'test',  // don't remove the appEnv property here
  providerHost: '/mocks'
};

export default Object.freeze(Object.assign(baseConfig, config));
