#!/usr/bin/env node

require('budo')(require.resolve('./solve.js'), {
  stream: process.stdout,
  open: true
})
