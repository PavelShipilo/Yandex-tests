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
    specs: ['node_modules/jasmine-expect/index.js', './tests/market.yandex.by/sorting-of-products-by-price.spec.js'],
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {        
        args: [
            '--start-maximized'
        ]
    }
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
  