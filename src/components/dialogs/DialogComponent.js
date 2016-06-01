'use strict'

import { Component, PropTypes } from 'react'

require('styles/dialogs/Dialog.sass')

/**
 * Each class which extends from DialogComponent
 * must implement this.el pointing to <dialog> tag.
 * You can accomplish it using the next snippet in <dialog>:
 *      ref={ (ref) => this.el = ref }
 */
class DialogComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.el.showModal) {
      dialogPolyfill.registerDialog(this.el.dialog)
    }
    setTimeout(() => this.el.showModal(), 500)
  }
};

DialogComponent.displayName = 'DialogsDialogComponent'

// Uncomment properties you need
//DialogComponent.propTypes = {};
//DialogComponent.defaultProps = {};

export default DialogComponent
