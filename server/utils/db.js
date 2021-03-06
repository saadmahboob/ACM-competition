/* jshint node:true */
'use strict';

var strategy = require('config').strategy;

try {
  module.exports = require('./db/' + strategy + '.js');
} catch (e) {
  console.error('[db] No such strategy: ' + strategy);
  process.exit(1);
}
