const { searchText, startPage } = require("../../utils/constants");
const BasePage = require("./BasePage");

class HomePage extends BasePage {
  get inputButton() {
    return $("//*[@class='devsite-search-field devsite-search-query']");
  }

  get link() {
    return $("//b[text()='Google Cloud Pricing Calculator']");
  }


  async clickInputButton() {
    await (await this.inputButton).click();
    await (await this.inputButton).setValue(searchText);
    await browser.keys("Enter");
  }

  async clickOnLink() {
    await this.link.click();
  }

  async open() {
    await super.open(startPage);
  }

  async windowSize() {
    await super.windowSize();
  }
}

module.exports = new HomePage();
