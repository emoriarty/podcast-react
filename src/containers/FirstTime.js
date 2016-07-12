import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Base from './abstract/Base';
import * as NotificationActions from '../actions/notifications'

class FirstTime extends Component {
  render() {
    const { config } = this.props;
    return(
      <div className="firstTime">
        { 
          config.ready &&
          <h1>First time</h1> 
        }
      </div>
    );
  }
}

//FirstTime.propTypes = {
//  actions: PropTypes.object.isRequired
//};

function mapStateToProps(state) {
  const { config } = state

  return {
    config
  }
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
