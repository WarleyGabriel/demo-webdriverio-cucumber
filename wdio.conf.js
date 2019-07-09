exports.config = {
  runner: 'local',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  specs: [
    './test/features/*.feature',
  ],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'zal:recordVideo': true,
    'zal:name': 'DEMO INTEGRATION TESTS',
    'zal:build': 'WebDriverIO',
  }],
  logLevel: 'trace',
  bail: 0,
  baseUrl: 'http://automationpractice.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['dot', 'spec', ['allure', {
    outputDir: './allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false,
  }]],
  cucumberOpts: {
    require: [
      './test/step-definitions/*.steps.js',
    ],
    backtrace: false,
    compiler: [],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tags: [],
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
  before() {
    browser.maximizeWindow();
  },
  beforeSession: function beforeTest() {
    require('@babel/register');
  },
};
