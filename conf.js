let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    directConnect: false,
    framework: 'jasmine2',
    jasmineNodeOpts: {
      showColors: true,
      silent: true,
      defaultTimeoutInterval: 360000,
      print: function () {
      }
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['node_modules/jasmine-expect/index.js', './tests/more-menue-values-check-for-Paris-and-London.spec.js'],
    capabilities: {
      browserName: 'chrome',
    },
    onPrepare: () => {
      browser.ignoreSynchronization = true;
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: true
        },
        summary: {
          displayDuration: false
        }
      }));      
    }   
  }