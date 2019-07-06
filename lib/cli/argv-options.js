var _ = require('lodash')
var minimist = require('minimist')

module.exports = function () {
  var argv = minimist(process.argv.slice(2))

  return {
    globs: argv['_'],
    testLocator: argv['test_locator'],
    helperPath: argv['helper'],
    asyncTimeout: argv['timeout'],
    configurator: argv['configurator'],
    plugins: argv['plugin'] ? _.castArray(argv['plugin']) : undefined
  }
}
