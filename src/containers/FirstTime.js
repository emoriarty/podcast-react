import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Base from './abstract/Base';
import * as NotificationActions from '../actions/notifications';
// Components
import BasicLayout from '../components/layouts/BasicComponent';

class FirstTime extends Component {
  render() {
    const { config, translations, provider } = this.props;
    return(
      <BasicLayout title={translations.ready ? translations.data.app.appName : ''}>
        { 
          config.ready &&
          translations.ready &&
          provider.ready &&
          this.props.children
        }
      </BasicLayout>
    );
  }
}

FirstTime.propTypes = {
  actions: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  translations: PropTypes.object.isRequired,
  provider: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { config, translations, provider } = state;

  return {
    config,
    translations,
    provider
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ...bindActionCreators(NotificationActions, dispatch)
    },
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstTime);
