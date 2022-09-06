let BasePage = require("../page/BasePage");
const { Builder, Key, By, until } = require("selenium-webdriver");

class Tests extends BasePage {
  get paste_title() {
    return driver.findElement(By.xpath("//h1"));
  }

  get buttonBash() {
    return driver.findElement(By.xpath('//div[@class="left"]/child::a'));
  }

  get added_code() {
    return driver.findElement(
      By.xpath('//textarea[@class="textarea -raw js-paste-raw"]')
    );
  }
  async buttonIsDisplayed() {
    await driver.wait(until.elementLocated(this.buttonBash));
    await this.buttonBash.isDisplayed();
  }

  async get_Title() {
    await driver.getTitle();
  }

  async addedTitle() {
    await this.paste_title.getText();
  }

  async addedText() {
    await driver.wait(until.elementLocated(this.added_code));
    await this.added_code.getText();
  }
}
module.exports = new Tests();
