var morph = require('nanomorph')
var html = require('nanohtml')
var Component = require('nanocomponent')

class Example extends Component {
  constructor () {
    super()
    this.tick = 0
    this.internal = 0
  }
  createElement () {
    this.tick++

    var interval = setInterval(() => {
      if (!this.element) clearInterval(interval)
      this.internal++
      var p = this.element.querySelector('#internal')
      p.innerText = `Example internally updated ${this.internal} times on ${Date.now()}`
    }, 500)

    return html`
      <div>
        <p>Example createElement called ${this.tick} times</p>
        <p id="internal"></p>
      </div>
    `
  }
  update () {
    return false
  }
}

var widget = new Example()
var p = document.createElement('p')
var morphs = 0
var manuals = 0

function updateMorph () {
  console.log('updateMorph', morphs++)
  morph(document.body, html`<body>
    <p>Updated ${morphs} times by nanomorph on ${Date.now()}</p>
    ${widget.render()}
    ${p}
  </body>`)
}

function updateManual () {
  console.log('updateManual', manuals++)
  p.innerText = `Updated ${manuals} manually on ${Date.now()}`
}

updateMorph()

setInterval(updateManual, 1000)
setInterval(updateMorph, 5000)
