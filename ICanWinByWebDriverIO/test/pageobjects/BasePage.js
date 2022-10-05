module.exports = class BasePage {
 
 async open(url) {
  await browser.url(url);
  }
};
