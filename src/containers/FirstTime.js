import React, {
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Base from './abstract/Base';

class FirstTime extends Base {
  constructor(props) {
    super(props)
  }

  render() {
    const {actions} = this.props;
    return <Main actions={actions}/>;
  }
}

FirstTime.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstTime);
