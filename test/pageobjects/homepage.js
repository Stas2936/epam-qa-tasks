const BasePage = require("./basepage");

class LoginPage extends BasePage {
  get inputButton() {
    return $("//*[@class='devsite-search-field devsite-search-query']");
  }

  get link() {
    return $("//b[text()='Google Cloud Pricing Calculator']");
  }

  get inputPasteTitle() {
    return $("#postform-name");
  }

  get buttonEl() {
    return $("//button[@class='btn -big']");
  }

  async clickInputButton() {
    await (await this.inputButton).click();
    await (
      await this.inputButton
    ).setValue("Google Cloud Platform Pricing Calculator");
    await browser.keys("Enter");
  }

  async clickOnLink() {
    await this.link.click();
  }

  async buttonClick() {
    await this.buttonEl.click();
  }

  async open() {
    await super.open("https://cloud.google.com/");
  }

  async windowSize() {
    await super.windowSize();
  }

  async switchFrame() {
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
  }
}

module.exports = new LoginPage();
