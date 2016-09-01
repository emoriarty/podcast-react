'use strict';

import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NotificationActions from '../../actions/notifications';
import MdlList from '../lists/MdlListComponent';
import MdlSwitchItem from '../lists/MdlSwitchItemComponent';

require('styles/pages/Countries.sass');

class CountriesComponent extends React.Component {
  render() {
    let regions = this.props.provider.data.regions;
    let regionTranslations = this.props.translations.data.app.regions;
    let countryTranslations = this.props.translations.data.commons.feed_country;
    return (
      <div className="countries-component">
        <MdlList>
          {
            regions.map(function(region, index) {
              return (
                <li>
                  <h3>{regionTranslations[region.translation_key]}</h3>
                  <MdlList>
                    {
                      region.countries.map(function(country, index) {
                        return <MdlSwitchItem id={region.id + "-" + country.translation_key} key={index} title={countryTranslations[country.translation_key]}></MdlSwitchItem>
                      })
                    }
                  </MdlList>
                </li>
              )
            })
          }
        </MdlList>
      </div>
    );
  }
}

CountriesComponent.displayName = 'PagesCountriesComponent';

// Uncomment properties you need
// CountriesComponent.propTypes = {};
// CountriesComponent.defaultProps = {};

CountriesComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  translations: PropTypes.object.isRequired,
  provider: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { config, translations, provider } = state;
  return { config, translations, provider };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ...bindActionCreators(NotificationActions, dispatch)
    },
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesComponent);
