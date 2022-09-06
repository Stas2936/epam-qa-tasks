const BasePage = require("./BasePage");

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
    await browser.pause(3000);
  }

  async buttonClick() {
    await this.buttonEl.click();
  }

  async swithToFrame() {
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
  }

  async open() {
    await super.open("https://cloud.google.com/");
  }

  async windowSize() {
    await super.windowSize();
  }
}

module.exports = new LoginPage();
