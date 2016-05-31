'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  providerHost: '/mocks'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
