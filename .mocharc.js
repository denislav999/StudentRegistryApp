
// Example config from Mocha repo       
module.exports = {
    diff: true,
    extension: ['js'],
    package: './package.json',
    reporter: 'spec',
    slow: 75,
    timeout: 3000,
    ui: 'tdd',
    'watch-files': ['lib/**/*.js','test/**/*.js'],
    'watch-ignore': ['lib/vendor']
  };