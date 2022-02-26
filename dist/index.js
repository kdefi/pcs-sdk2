
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pcs-sdk2.cjs.production.min.js')
} else {
  module.exports = require('./pcs-sdk2.cjs.development.js')
}
