this.demoTest = browser => {
  // first, identify the element
  // assert the element is present. Eg.
  browser.expect.element("#main").to.be.present;

  // or assert the element is visible. Eg.
  browser.expect.element("#main").to.be.visible;

  // .equal(value)/.contain(value)/.match(regex)
  browser.expect.element("#main").text.to.equal("The night watch");
  browser.expect.element("#main").text.to.contain("My nice name");
  browser.expect
    .element("#main")
    .to.have.css("display")
    .which.equals("block");

  // .startsWith(value)/.endsWith(value)
  browser.expect.element("#main").text.to.endWith("Watch");
  browser.expect.element("#main").text.to.startWith("Hello");

  // .not
  browser.expect.element("#main").text.to.not.equal("The night watch");
  browser.expect.element("#main").text.to.not.contain("Mr John");
  browser.expect
    .element("#main")
    .to.have.css("display")
    .which.does.not.equal("block");

  // .before(millisecond)/.after(ms)
  browser.expect
    .element("#main")
    .text.to.contain("Hello")
    .before(1000);
  browser.expect
    .element("#main  ")
    .text.to.not.contain("bad")
    .after(500);

  // .a(type)
  browser.expect.element("#main").to.be.an("input");
  browser.expect.element("#main").to.be.an("input", "This is an input");
  browser.expect.element("#main").to.be.a("span");

  // .attribute(name)
  browser.expect.element("body").to.have.attribute("data-attr");
  browser.expect.element("body").to.not.have.attribute("data");
  browser.expect
    .element("body")
    .to.not.have.attribute("data", "This is so awesome");
  browser.expect
    .element("body")
    .to.have.attribute("data")
    .before(1000);
  browser.expect
    .element("body")
    .to.have.attribute("data")
    .equals("some attribute");
  browser.expect
    .element("body")
    .to.have.attribute("data")
    .not.equals("other attributes");
  browser.expect
    .element("body")
    .to.have.attribute("data")
    .which.contains("something");
  browser.expect
    .element("body    ")
    .to.have.attribute("data")
    .which.matches(/^something\else/);

  // .css(property)
  browser.expect.element("body").to.have.css("display");
  browser.expect.element("body").to.have.css("display", "more texts here");
  browser.expect.element("body").to.not.have.css("display");
  browser.expect
    .element("body")
    .to.have.css("display")
    .before(30000);
  browser.expect
    .element("body")
    .to.have.css("display")
    .which.equals("block");
  browser.expect
    .element("body")
    .to.have.css("display")
    .which.contains("Hello");
  browser.expect
    .element("body")
    .to.have.css("display")
    .which.matches("Happy ");

  // .enabled
  browser.expect.element("body").to.be.enabled;
  browser.expect.element("body").to.not.be.enabled;
  browser.expect.element("body").to.be.enabled.before(3000);
  browser.expect.element("body").to.be.enabled.after(3000);

  // .present
  browser.expect.element("body").to.be.present;
  browser.expect.element("body").to.not.be.present;
  browser.expect.element("body").to.be.present.before(4000);
  browser.expect.element("body").to.be.present.after(4000);

  //   .selected

  browser.expect.element("body").to.be.selected;
  browser.expect.element("body").to.not.be.selected;
  browser.expect.element("body").to.be.selected.before(4000);
  browser.expect.element("body").to.be.selected.after(4000);

  // .text
  browser.expect.element("body").text.to.equal("Hi");
  browser.expect.element("body").text.to.not.equal("Hi");
  browser.expect
    .element("body")
    .text.to.equal("Hi")
    .before(3000);
  browser.expect.element("body").text.to.contain("Hi");
  browser.expect.element("body").text.to.match("Hi");

  //   .value
  browser.expect.element("#q").to.have.value.that.equals("search");
  browser.expect.element("#q").to.have.value.not.equals("search");
  browser.expect.element("#q").to.have.value.which.contains("search");
  browser.expect.element("#q").to.have.value.which.matches(/search/);

  //   .visible
  browser.expect.element("#main").to.be.visible;
  browser.expect.element("#main").to.not.be.visible;
  browser.expect.element("#main").to.be.visible.before(100);
};
