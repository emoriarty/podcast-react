import {
  Component
} from 'react';

class Base extends Component {
  componentWillReceiveProps(nextProps) {
    let provider = nextProps.provider;
    let trans = nextProps.translations;
    const config = nextProps.config;

    if (config.fail || config.ready
      && this.isSplash()) {
      window.loadingScreen.finish();
    }
  }

  isSplash() {
    return !document.body.classList.contains('pg-loaded');
  }
}

export default Base;
