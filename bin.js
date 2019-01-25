#!/usr/bin/env node

var path = require('path')
require('budo')(path.join(__dirname, './solve.js'), {
  stream: process.stdout,
  live: true,
  open: true
})
