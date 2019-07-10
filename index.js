var configure = require('./lib/configure')
var prepare = require('./lib/prepare')
var plan = require('./lib/plan')
var run = require('./lib/run')

module.exports = function (testLocator, userOptions, cb) {
  // this proves the new value is making it through the arg parsing
  if (userOptions.globs && userOptions.globs.length) { console.log(userOptions.globs) };
  if (arguments.length < 3) { cb = userOptions; userOptions = {} }
  var config = configure(testLocator, userOptions)
  run(plan(prepare(config)), config, cb)
}

module.exports.plugins = require('./lib/plugins/store')
