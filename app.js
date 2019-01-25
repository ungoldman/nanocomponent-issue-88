var html = require('nanohtml')
var morph = require('nanomorph')
var Button = require('./button.js')

var c1 = new Button('a')
var c2 = new Button('b')

var tick = 0

// render both 10 times
for (var i = 0; i < 10; i++) {
  render(c1)
  // render(c2)
}

// some render function that just updates a counter
function render (c) {
  const b = html`<body>
      ${c.render('hi:' + tick++)}
    </body>`

  morph(document.body, b)
}

// Running the above app will result in 20 createElements being written out. If only one component is used then it's only written out once. Is that working as expected? If so how would you embed a third party dom element.

// For now we've published a fork of nanomorph that supports short circuiting "guarded" elements for this using https://github.com/hyperdivision/nanomorph/blob/master/index.js#L63 and https://github.com/hyperdivision/nanomorph-guard

// Thanks for all the great stuff btw! :)
