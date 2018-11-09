const reporter = require("cucumber-html-reporter");

/*
====================================================================
For full list of Protractor config options,
see- https://github.com/angular/protractor/blob/master/lib/config.ts
====================================================================
**/
exports.config = {
    /**
     * The timeout in milliseconds for each script run on the browser. This
     * should be longer than the maximum time your application needs to
     * stabilize between tasks.
     */
    allScriptsTimeout: 120000,

    // To connect directly to Drivers ------------------------------------

    /**
     * If true, Protractor will connect directly to the browser Drivers
     * at the locations specified by chromeDriver and firefoxPath. Only Chrome
     * and Firefox are supported for direct connect.
     *
     * default: false
     */
    directConnect: true,

    /**
     * A base URL for your application under test. Calls to protractor.get()
     * with relative paths will be resolved against this URL (via url.resolve)
     */
    baseUrl: 'http://localhost',
    /**
     * Protractor can launch your tests on one or more browsers. If you are
     * testing on a single browser, use the capabilities option. If you are
     * testing on multiple browsers, use the multiCapabilities array.
     *
     * For a list of available capabilities, see
     * https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
     * In addition, you may specify count, shardTestFiles, and maxInstances.
     *
     * Example:
     * capabilities: {
     *   browserName: 'chrome',
     *   name: 'Unnamed Job',
     *   logName: 'Chrome - English',
     *   count: 1,
     *   shardTestFiles: false,
     *   maxInstances: 1,
     *   specs: ['spec/chromeOnlySpec.js'],
     *   exclude: ['spec/doNotRunInChromeSpec.js'],
     *   seleniumAddress: 'http://localhost:4444/wd/hub'
     * }
     */
    capabilities: {
        browserName: 'chrome'
    },
    /**
     * Test framework to use. This may be one of: jasmine, mocha or custom.
     * Default value is 'jasmine'
     *
     * When the framework is set to "custom" you'll need to additionally
     * set frameworkPath with the path relative to the config file or absolute:
     *
     *   framework: 'custom',
     *   frameworkPath: './frameworks/my_custom_jasmine.js',
     *
     * See github.com/angular/protractor/blob/master/lib/frameworks/README.md
     * to comply with the interface details of your custom implementation.
     *
     * Jasmine is fully supported as test and assertion frameworks.
     * Mocha has limited support. You will need to include your
     * own assertion framework (such as Chai) if working with Mocha.
     */

    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    /**
     * Required. Spec patterns are relative to the location of this config.
     *
     * Example:
     * specs: [
     *   'spec/*_spec.js'
     * ]
     */
    specs: [
        './features/**/*.feature'
    ],
    /**
     * Protractor Log Level Config
     */
    logLevel: 'DEBUG',


    /**
     * Options to be passed to cucumber.
     *
     * See https://github.com/cucumber/cucumber-js/blob/master/docs/cli.md
     * for the exact options available.
     */
    cucumberOpts: {
        "compiler": 'ts:ts-node/register',
        "dry-run": false,
        "fail-fast": false,
        "format": ["json:./reports/cucumber_report.json"],
        "require": ["./features/stepDefinitions/**/*.ts"],
        "tags": "",

    },
    /**
     * A callback function called once tests are finished. onComplete can
     * optionally return a promise, which Protractor will wait for before
     * shutting down webdriver.
     *
     * At this point, tests will be done but global objects will still be
     * available.
     */
    onComplete: () => {
        const cucumberReporterOptions = {
            theme: 'bootstrap',
            jsonFile: './reports/cucumber_report.json',
            output: process.cwd() + './reports/cucumber_reporter.html',
            reportSuiteAsScenarios: true
        };
        reporter.generate(cucumberReporterOptions);
    }

};
/*
====================================================================
For full list of Protractor config options,
see- https://github.com/angular/protractor/blob/master/lib/config.ts
====================================================================
**/