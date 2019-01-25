var Nanocomponent = require('nanocomponent')
var html = require('nanohtml')

class Button extends Nanocomponent {
  constructor () {
    super()
    this.text = ''
  }

  createElement (text) {
    console.log('Calling createElement')
    this.text = text
    return html`<h1>${text}</h1>`
  }

  update (text) {
    if (text !== this.text) {
      this.text = text
      this.element.innerText = this.text   // Directly update the element
    }
    return false                           // Don't call createElement again
  }

  unload (text) {
    console.log('No longer mounted on the DOM!')
  }
}

module.exports = Button
