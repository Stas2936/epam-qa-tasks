module.exports = class BasePage {
  open(theUrl) {
    return browser.url(theUrl);
  }

  windowSize() {
    return browser.maximizeWindow();
  }
};
