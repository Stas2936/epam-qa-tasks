const { YOP_mail } = require("../../utils/constants");

class YOPmail {
  get randomMail() {
    return $("//*[@id='listeliens']/a[1]");
  }

  get copyMailButton() {
    return $("#cprnd");
  }

  get checkMailButton() {
    return $("/html/body/div/div[2]/main/div/div[2]/div/div/div[2]/button[2]");
  }

  get costInMail() {
    return $(
      "//*[@id='mail']/div/div/table/tbody/tr[2]/td/table/tbody/tr[2]/td[2]/h3"
    );
  }

  get mailFrame() {
    return $("#ifmail");
  }

  async openMail() {
    await browser.newWindow(YOP_mail);
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
}

module.exports = new YOPmail();
