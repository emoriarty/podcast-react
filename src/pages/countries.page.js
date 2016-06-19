'use strict'
require('styles/containers/CountryPage.sass')

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'

import List from '../components/lists/list'
import ExpandableListItem from '../components/lists/expandable.item'
import RadioListItem from '../components/lists/radio.item'
import { setCountry } from '../actions/storage.action'

class CountryPage extends Component {
  constructor(props) {
    super(props)
    this.handleSelectedCountry = this.handleSelectedCountry.bind(this)
  }

  handleSelectedCountry(ev) {
    let ids     = ev.nativeEvent.target.value.split(':')
    let region  = _.findWhere(this.props.provider.regions, {id: parseInt(ids[0])})
    let country = _.findWhere(region.countries, {country_code: ids[1]})
    
    this.props.dispatch(setCountry(country))
  }

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
                    <RadioListItem
                      key={index}
                      index={index}
                      value={region.id + ':' + country.country_code}
                      onSelect={this.handleSelectedCountry}>
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
