import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NotificationActions from '../actions/notifications'

class Main extends Component {
  render() {
    const {config} = this.props;

    return (
      <div className="main">
      {
        config.ready &&
        <div> 
          <h1>MAIN</h1>
          <div>{this.props.children}</div>
        </div>
      }
      </div>
    );
  }
}

Main.propTypes = {
  actions: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
