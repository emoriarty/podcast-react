'use strict';

import React, { Component, PropTypes } from 'react';
import Dialog from './DialogComponent';

require('styles/dialogs/Dialog.sass');
require('styles/dialogs/MessageDialog.sass');

class MessageDialogComponent extends Dialog {
  constructor(props) {
    super(props)
    this.handleAccept = this.handleAccept.bind(this)
  }

  handleAccept() {
    this.el.close();
    this.props.onAccept();
  }

  render() {
    const { title, message } = this.props

    return (
      <dialog
        ref={ (ref) => this.el = ref }
        className="mdl-dialog dialog-component messagedialog-component">

        <div className="mdl-dialog__content">
          { title && <h4 class="">{title}</h4> }
          <p>{ message }</p>
        </div>

        <div className="mdl-dialog__actions mdl-dialog__actions--full-width">
          <button type="button" className="mdl-button" onClick={ this.handleAccept }>
            Accept
          </button>
        </div>
      </dialog>
    )
  }
}

MessageDialogComponent.displayName = 'DialogsMessageDialogComponent';

// Uncomment properties you need
MessageDialogComponent.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onAccept: PropTypes.func
};
// MessageDialogComponent.defaultProps = {};

export default MessageDialogComponent;
