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
    const { config, translations } = this.props;
    return(
      <BasicLayout title={translations.ready ? translations.data.appName : ''}>
        { 
          config.ready &&
          translations.ready &&
          <h1>First time</h1> 
        }
      </BasicLayout>
    );
  }
}

FirstTime.propTypes = {
  actions: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  translations: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { config, translations } = state;

  return {
    config,
    translations
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
