const { yopMailLink } = require("../../utils/constants");
const BasePage = require("./BasePage");

class YOPmail extends BasePage {
  get randomMail() {
    return $("//a[@href='email-generator']/div[@class='txtlien']");
  }

  get copyMailButton() {
    return $("#cprnd");
  }

  get checkMailButton() {
    return $(
      "//button[@class='md but text f24 egenbut' and @onclick='egengo();' ]"
    );
  }

  get costInMail() {
    return $("//h3[contains(text(),'USD 1,081.20')]");
  }

  get mailFrame() {
    return $("#ifmail");
  }

  async openMail() {
    await browser.newWindow(yopMailLink);
  }

  async clickRandomMail() {
    await (await this.randomMail).click();
  }

  async copyMail() {
    await (await this.copyMailButton).click();
  }

  async checkMail() {
    await browser.pause(5000);
    await (await this.checkMailButton).click();
  }

  async switchMailFrame() {
    await browser.switchToFrame(await this.mailFrame);
  }

  async switchWindowToCalculator() {
    const windows = await super.getWindowHandles();
    await browser.switchToWindow(windows[0]);
  }
}

module.exports = new YOPmail();
