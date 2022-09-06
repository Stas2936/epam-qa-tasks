let BasePage = require("../page/Basepage");
const { Builder, Key, By, until } = require("selenium-webdriver");

class HomePage extends BasePage {
  get add_code() {
    return driver.findElement(By.id("postform-text"));
  }


  get expirationField() {
    return driver.findElement(By.id("select2-postform-expiration-container"));
  }

  get expiration10Minutes() {
    return driver.findElement(By.xpath("//li[text()='10 Minutes']"));
  }

  get pasteTitle() {
    return driver.findElement(By.xpath('//*[@id="postform-name"]'));
  }

  get newPasteButton() {
    return driver.findElement(By.className("btn -big"));
  }

  async addCode(code) {
    await this.add_code.sendKeys(code);
  }

  async select_expiration() {
    await this.expirationField.click();
    await driver.wait(until.elementIsVisible(this.expiration10Minutes));
    await this.expiration10Minutes.click();
  }

  async pasteTitleName(text) {
    await this.pasteTitle.sendKeys(text);
  }

  async createNewPaste() {
    await this.newPasteButton.click();
  }
  async open() {
   await super.open("https://pastebin.com");
  }
}

module.exports = new HomePage();


