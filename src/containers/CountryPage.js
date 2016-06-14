'use strict'
require('styles/containers/CountryPage.sass')

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import List from '../components/lists/ListContainer'
import ExpandableListItem from '../components/lists/ExpandableItem'
import RadioListItem from '../components/lists/RadioItem'

class CountryPage extends Component {
  render() {
    const {provider, translations, params } = this.props
    let className = 'country-page';

    if (!params.page) className += ' is-active';

    return (
      <section className={className}>
        <h2 className="headline">Choose your country</h2>
        <List>
        {provider.regions.map((region, index) => {
          return (
            <ExpandableListItem key={index} index={index} text={translations.app.regions[region.translation_key]}>

              <List style="display:none">
                {region.countries.map((country, index) => {
                  return (
                    <RadioListItem key={index} index={index} value={index}>
                      <img className="country-page--flag" src={country.flag_icon} />
                      {translations.commons.feed_country[country.translation_key]}
                    </RadioListItem>
                  )
                })}
              </List>
              
            </ExpandableListItem>
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

export default connect(mapStateToProps)(CountryPage);
