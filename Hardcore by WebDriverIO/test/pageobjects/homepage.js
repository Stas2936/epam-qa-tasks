const { start_page, search_text } = require("../../utils/constants");
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
    await (
      await this.inputButton
    ).setValue(search_text);
    await browser.keys("Enter");
  }

  async clickOnLink() {
    await this.link.click();
  }

  async open() {
    await super.open(start_page);
  }

  async windowSize() {
    await super.windowSize();
  }
}

module.exports = new HomePage();
