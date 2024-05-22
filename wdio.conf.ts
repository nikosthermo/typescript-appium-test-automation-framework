import { Options, Capabilities } from '@wdio/types'

export const config: Options.Testrunner = {
    runner: 'local',
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '14',
        'appium:deviceName': 'emulator-5554',
        'appium:appPackage': 'com.android.chrome',
        'appium:appActivity': 'com.google.android.apps.chrome.Main',
        'appium:automationName': 'UiAutomator2'
    } as Capabilities.WebdriverIOCapabilities],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
