'use strict';
require('styles/containers/CountryPage.sass');

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NotificationActions from '../actions/notification.action'

import Card from '../components/cards/CardComponent';
import CardHeader from '../components/cards/CardHeaderComponent';
import CardBody from '../components/cards/CardBodyComponent';
import CardActions from '../components/cards/CardActionsComponent';
import CardMenu from '../components/cards/CardMenuComponent';
import List from '../components/lists/ListContainer';
import RadioListItem from '../components/lists/RadioItem';

class CountryPage extends Component {
  render() {
    const {provider, translations, params } = this.props
    let className = 'mdl-layout__tab-panel country-page mdl-grid';

    if (!params.page) className += ' is-active';

    return (
      <section className={className}>
        <h2>Choose your country</h2>
        <List>
          {provider.countries.map((country, index) => {
            return (
              <RadioListItem 
                key={index}
                index={index} 
                name={translations.commons.feed_country[country.translation_key]} 
                value={index}/>
            )
          })}
        </List>
      </section>
    );
  }
}

CountryPage.displayName = 'ContainersCountryPage';

// Uncomment properties you need
CountryPage.propTypes = {
  provider: PropTypes.object.isRequired,
  translations: PropTypes.object.isRequired
};
// CountryPage.defaultProps = {};

const mapStateToProps = state => {
  const { provider, translations } = state
  return {
    provider,
    translations
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(NotificationActions, dispatch),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryPage);
