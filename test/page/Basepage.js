//driver.manage().setTimeouts({ implicit: 10000 });

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async open(url) {
    await this.driver.get(url);
  }
}

module.exports = BasePage;
