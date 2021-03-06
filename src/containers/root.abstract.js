'use strict'

import { Component } from 'react'

class RootAbstract extends Component {

  componentDidMount() {
    /**
     * Performs a "Cutting the mustard" test. If the browser supports the features
     * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL
     * components requiring JavaScript.
     */
    if ('classList' in document.createElement('div') &&
        'querySelector' in document &&
        'addEventListener' in window && Array.prototype.forEach) {
      document.documentElement.classList.add('mdl-js');
      window.componentHandler.upgradeAllRegistered();
    } else {
      /**
       * Dummy function to avoid JS errors.
       */
      window.componentHandler.upgradeElement = function() {};
      /**
       * Dummy function to avoid JS errors.
       */
      window.componentHandler.register = function() {};
    }
  }

  componentWillReceiveProps(nextProps) {
    let provider = nextProps.provider
    let trans = nextProps.translations

    if (provider.fail || provider.ready
      && trans.fail || trans.ready
      && this.isSplash()) {
      window.loadingScreen.finish()
    }

    window.componentHandler.upgradeAllRegistered();
  }

  isSplash() {
    return !document.body.classList.contains('pg-loaded')
  }
}

export default RootAbstract