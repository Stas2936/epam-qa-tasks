module.exports = class Page {
 
 async open(url) {
  await browser.url(url);
  }
};
