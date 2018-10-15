module.exports = {
  'open about page': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .pause(2000)
      .click('a[href="#/about"]')
      .pause(2000)
      .assert.containsText('body', 'This is an about page')
      .end();
  },
};

