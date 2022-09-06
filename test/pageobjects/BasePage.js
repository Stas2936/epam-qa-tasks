module.exports = class BasePage {
  async open(theUrl) {
    return await browser.url(theUrl);
  }

  async windowSize() {
    return await browser.maximizeWindow();
  }
};
