const puppeteer = require('puppeteer');
const config = require('./config');
const headlessState = (config('NODE_ENV') == 'development' || config('NODE_ENV') == 'dev') ? false : true;

puppeteer.launch({ headless: headlessState, args: ['--no-sandbox'] }).then(function(browser) {
    global.browser = browser;
    console.log('browser ready');
});