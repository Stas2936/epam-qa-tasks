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

  // async getCostInMail() {
  //   let a = await (await this.costInMail).getText();
  //   console.log("------------------------------------------" + a);
  //   return a;
  //}
}

module.exports = new YOPmail();
