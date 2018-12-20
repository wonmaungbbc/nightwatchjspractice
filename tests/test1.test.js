

// I can use the test suits in different way. EG. 

this.demoTestGoogle =  (browser)=> {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]', 1000)
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', 'The Night Watch')
      .end();
  };
  
  this.helloWonMaungThein = (browser)=>{
      browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', ['Won Maung Thein is Awesome',browser.keys.ENTER])
      .end();
  };

  this.visitBBCBitesize = browser => {
      browser
      .url('https://www.bbc.com/bitesize')
      .end();
  }