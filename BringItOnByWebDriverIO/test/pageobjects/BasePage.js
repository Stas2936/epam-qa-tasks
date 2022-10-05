module.exports = class Page {
  async open() {
    await browser.url("https://pastebin.com");
  }
};
