const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: ['./src/**/*.feature'],
    maxInstances: 1,

    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
        },
    ],

    logLevel: 'trace',
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'http://automationpractice.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',

    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],
        ['timeline', { outputDir: './test-report/timeline' }],
    ],

    cucumberOpts: {
        require: ['./src/**/*.steps.ts'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: true,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 300000,
        ignoreUndefinedDefinitions: false,
        tagExpression: 'not @skip'
    },

    autoCompileOpts: {
        autoCompile: true,

        tsNodeOpts: {
            transpileOnly: true
        }
    },

    services: ['chromedriver', [TimelineService]],

    beforeSession() {
        require('expect-webdriverio').setOptions({ wait: 5000 });
    },

    before() {
        browser.setWindowSize(1280, 720);
    },

    afterStep(
        uri: any,
        feature: any,
        scenario: any
    ) {
        if (scenario.error) {
            browser.takeScreenshot();
        }
    }
};
