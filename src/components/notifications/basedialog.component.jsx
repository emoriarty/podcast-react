'use strict'

import { Component } from 'react'

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
      window.dialogPolyfill.registerDialog(this.el.dialog)
    }
  }
}

// Uncomment properties you need
//DialogComponent.propTypes = {};
//DialogComponent.defaultProps = {};

export default DialogComponent
