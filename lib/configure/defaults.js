module.exports = function () {
  return {
    cwd: process.cwd(),
    output: console.log,
    globs: [],
    testLocator: 'test/lib/**/*.js',
    helperPath: 'test/helper.js',
    asyncTimeout: 5000,
    configurator: null,
    plugins: []
  }
}
