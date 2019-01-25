#!/usr/bin/env node

const path = require.resolve('./solve.js')

console.log('path', path)

require('budo')(path, {
  stream: process.stdout,
  live: true,
  open: true
})
