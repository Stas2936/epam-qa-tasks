const { Builder, Key, By, until } = require("selenium-webdriver");
const BasePage = require("./BasePage");

class TestPage extends BasePage {
  get buttonBash() {
    return driver.findElement(By.xpath('//a[@href="/archive/bash"]'));
  }

  get addedCode() {
    return driver.findElement(
      By.xpath('//textarea[@class="textarea -raw js-paste-raw"]')
    );
  }
  async buttonIsDisplayed() {
    await driver.wait(until.elementIsVisible(await this.buttonBash));
    await this.buttonBash.isDisplayed();
  }

  async getTitle() {
    await driver.wait(
      until.titleContains("how to gain dominance among developers")
    );
    await driver.getTitle();
  }

  async addedText() {
    await driver.wait(until.elementIsVisible(await this.addedCode));
    await this.addedCode.getText();
  }
}
module.exports = new TestPage();
