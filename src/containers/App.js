/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Base from './abstract/Base';
//Components
import NotificationComponent from '../components/notifications/NotificationComponent';
//Actions
import * as NotificationActions from '../actions/notifications';
import {fetchConfigData} from '../actions/config/fetchConfig';
import {fetchTranslationsData} from '../actions/translations/fetchTranslations';
import {fetchProviderData} from '../actions/provider/fetchProviderData';
//Services
import * as DB from '../services/storage';

/* Populated by react-webpack-redux:reducer */
class App extends Base {
  componentDidMount() {
    this.props.actions.fetchConfigData();
    this.props.actions.fetchTranslationsData();
    this.props.actions.fetchProviderData();

    // Check if there is a country stored 
    if (!DB.fetch(DB.COUNTRY_KEY)) {  
      this.context.router.push('first-time/country');
    } else {
      dispatch(getCountry())
      //TODO fetch rss for country   
    }
  }

  componentWillReceiveProps(nextProps) {
    super.componentWillReceiveProps(nextProps);
    //const {config, routing} = nextProps;
  }

  render() {
    const {config} = this.props;
    return (
      <div className="index">
        <NotificationComponent />
        { this.props.children }
      </div>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  notifications: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired
};
App.contextTypes = {
  router: React.PropTypes.object
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const { config, translations, notifications, routing } = state
  const props = {
    config,
    translations,
    notifications,
    routing
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    fetchConfigData,
    fetchTranslationsData,
    fetchProviderData,
    ...bindActionCreators(NotificationActions, dispatch)
  };
  const all = {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  }
  //console.log(all)
  return all;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
