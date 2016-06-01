'use strict';

import React, { Component, PropTypes } from 'react';
import Dialog from './DialogComponent';

require('styles/dialogs/Dialog.sass');
require('styles/dialogs/CountriesDialog.sass');

class CountriesDialogComponent extends Dialog {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    let countries = nextProps.countries

    if (countries && countries.length > 0) {
      window.loadingScreen.finish()
    }
  }

  render() {
    return (
      <dialog
        ref={ (ref) => this.el = ref }
        id="countries-dialog"
        className="mdl-dialog dialog-component countriesdialog-component">
        <div className="mdl-dialog__content">
          <h2>Choose your country</h2>
          {this.props.countries.map((country) => {
            return (
              <button className="mdl-button mdl-js-button mdl-button--fab">
                <img src={country.flag_icon} />
              </button>
            )
          })}
        </div>
        <div className="mdl-dialog__actions mdl-dialog__actions--full-width">
          <button type="button" className="mdl-button">Agree</button>
          <button type="button" className="mdl-button close">Disagree</button>
        </div>
      </dialog>
    )
  }
};

CountriesDialogComponent.displayName = 'DialogsCountriesDialogComponent';

// Uncomment properties you need
CountriesDialogComponent.propTypes = {
  countries: PropTypes.array
};

CountriesDialogComponent.defaultProps = {}
  countries: []
;

export default CountriesDialogComponent;
