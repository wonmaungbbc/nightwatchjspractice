this.demo_url_test = browser => {
  browser.url(
    "https://automate.browserstack.com/?utm_campaign=dailyBuildSummary&utm_medium=email&utm_source=dailyBuildSummary&utm_term=viewMoreClick"
  );
};

this.demoTest = browser => {
  console.log("This will be running and pause for about 5000");
  browser.url("https://www.bbc.com/bitesize/subjects/zr9d7ty");
  browser.pause(5000);
  // or suspend indefinitely
  //   browser.pause();
};

