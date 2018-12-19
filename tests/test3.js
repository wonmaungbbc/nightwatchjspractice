
this.DemotestGoogle = (browser) => {
    browser
        .url('http://google.no')
        .pause(1000);

    // expect element <body> to be present in 1000ms
    browser.expect.element('body').to.be.present.before(1000);

    // expect element <#lst-ib> to have css property 'display'
    // browser.expect.element('#lst-ib').to.have.css('display');

    // expect element <#hplogo> to have css property 'display'
    browser.expect.element('#hplogo').to.have.css('display');

    // expect element <body> to have attribute 'class' which contains text 'vasq'
    // browser.expect.element('body').to.have.attribute('class').which.contains('vasq');

    // expect element <#lst-ib> to be an input tag
    browser.expect.element('.gLFyf').to.be.an('input');

    // expect element <#lst-ib> to be visible
    // browser.expect.element('#lst-ib').to.be.visible;

    browser.end();
};