const BasePage = require("./base.page");

class HomePage extends BasePage {
  //define selector
  get inputCode() {
    return $("#postform-text");
  }

  get findExperation() {
    return $("#select2-postform-expiration-container");
  }

  get findExperation10Minutes() {
    return $("//li[text()='10 Minutes']");
  }

  get inputPasteTitle() {
    return $("#postform-name");
  }

  get buttonEl() {
    return $("//button[@class='btn -big']");
  }

  async addCodeText(code) {
    await this.inputCode.addValue(code);
    await browser.pause(2000);
  }

  async selectExpiration() {
    await this.findExperation.click();
    await this.findExperation10Minutes.click();
  }

  async addTextTitle(text) {
    await this.inputPasteTitle.addValue(text);
    await browser.pause(2000);
  }

  async buttonClick() {
    await this.buttonEl.click();
    await browser.pause(5000);
  }

  async open() {
    super.open("https://pastebin.com");
  }
}

module.exports = new HomePage();
