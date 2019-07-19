var _ = require('lodash')
var criteria = require('./criteria')
var defaults = require('./defaults')

module.exports = function (testLocator, userOptions) {
  return _.tap(_.defaults({}, userOptions, defaults()), function (config) {
    // this proves the globs value is making it through the arg parsing
    if (config.globs && config.globs.length) { console.log(config.globs) };
    config.criteria = criteria(testLocator || config.globs[0] || config.testLocator)
  })
}
