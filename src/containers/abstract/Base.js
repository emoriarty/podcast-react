import {
  Component
} from 'react';

class Base extends Component {
  componentWillReceiveProps(nextProps) {
    let provider = nextProps.provider
    let trans = nextProps.translations

    if (provider.fail || provider.ready
      && trans.fail || trans.ready
      && this.isSplash()) {
      window.loadingScreen.finish()
    }
  }
}

export default Base;
