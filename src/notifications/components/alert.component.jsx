import React, { Component, PropTypes } from 'react';
import BaseDialog from './basedialog.component.jsx';
import 'style!../../styles/modals/Modal.sass';

class AlertComponent extends BaseDialog {

  handleAccept(ev) {
    console.log('ev', ev)
    this.el.close()
  }

  render() {
    const {title, message} = this.props
    return (
      <dialog
        ref={ (ref) => this.el = ref }
        className="mdl-dialog notification modal-component alert-component">

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
    );
  }

};

AlertComponent.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  action: PropTypes.func
};

export default AlertComponent;
