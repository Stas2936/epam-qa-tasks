let BasePage = require("./BasePage");
const { Builder, Key, By, until } = require("selenium-webdriver");
let webdriver = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();

class HomePage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  get addCodeField() {
    return driver.findElement(By.id("postform-text"));
  }

  get syntaxField() {
    return driver.findElement(
      By.xpath("//span[@id='select2-postform-format-container']")
    );
  }

  get syntaxValue() {
    return driver.findElement(
      By.xpath("//input[@class='select2-search__field']")
    );
  }

  get expirationField() {
    return driver.findElement(By.id("select2-postform-expiration-container"));
  }

  get expiration10Minutes() {
    return driver.findElement(By.xpath("//li[text()='10 Minutes']"));
  }

  get pasteTitle() {
    return driver.findElement(By.xpath('//*[@id="postform-name"]'));
  }

  get newPasteButton() {
    return driver.findElement(By.className("btn -big"));
  }

  async addCode(code) {
    await this.addCodeField.sendKeys(code);
  }

  async selectSyntax() {
    await this.syntaxField.click();
    await driver.wait(until.elementIsVisible(this.syntaxValue));
    await this.syntaxValue.sendKeys("Bash", Key.ENTER);
  }

  async selectExpiration() {
    await this.expirationField.click();
    await driver.wait(until.elementIsVisible(this.expiration10Minutes));
    await this.expiration10Minutes.click();
  }

  async pasteTitleName(text) {
    await this.pasteTitle.sendKeys(text);
  }

  async createNewPaste() {
    await this.newPasteButton.click();
  }
  async open() {
    await super.open("https://pastebin.com");
  }
}
module.exports = new HomePage(driver);
