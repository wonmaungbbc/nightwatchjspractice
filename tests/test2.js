module.exports = {
    'Demo test Google':  (browser)=> {
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body')
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('input[name=btnK]')
            .click('input[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
        },

    'step one: navigate to google':  (browser)=> {
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('input[name=btnK]', 1000)

    },

    'step two: click input':  (browser)=> {
        browser
            .click('input[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
};