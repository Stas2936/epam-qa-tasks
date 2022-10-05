const BasePage = require("./BasePage");

class HomePage extends BasePage {
  get inputCodeField() {
    return $("#postform-text");
  }

  get findExpirationField() {
    return $("#select2-postform-expiration-container");
  }

  get findExpiration10Minutes() {
    return $("//li[text()='10 Minutes']");
  }

  get inputPasteTitleField() {
    return $("#postform-name");
  }

  get buttonCreateNewPaste() {
    return $("//button[@class='btn -big']");
  }

  async addCodeText(code) {
    await this.inputCodeField.addValue(code);
  }

  async selectExpiration() {
    await this.findExpiration.click();
    await (await this.findExpiration10Minutes).waitForDisplayed();
    await this.findExpiration10Minutes.click();
  }

  async addTextTitle(text) {
    await this.inputPasteTitleField.addValue(text);
  }

  async buttonClick() {
    await this.buttonCreateNewPaste.click();
  }

  async open() {
    await super.open("https://pastebin.com");
  }
}

module.exports = new HomePage();
