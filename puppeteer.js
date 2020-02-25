const puppeteer = require('puppeteer');
const config = require('./config');
const headlessState = true;

puppeteer.launch({ headless: headlessState, args: ['--no-sandbox'] }).then(function(browser) {
    global.browser = browser;
    console.log('browser ready');
});
