const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputCode() {
    return $("#postform-text");
  }

  get findExperation() {
    return $("#select2-postform-expiration-container");
  }

  get findExperation10Minutes() {
    return $("//li[text()='10 Minutes']");
  }

  get findSyntax() {
    return $("#select2-postform-format-container");
  }

  get findField(){
    return $('.select2-search__field')
  }

  get findBashInSyntax() {
    return $(
      "//li[@class='select2-results__option select2-results__option--highlighted']"
    );
  }

  get inputPasteTitle() {
    return $("#postform-name");
  }

  get buttonEl() {
    return $("//button[@class='btn -big']");
  }

  async addCodeText(code) {
    await this.inputCode.addValue(code);
  }

  async selectExpiration() {
    await this.findExperation.click();
    await this.findExperation10Minutes.click();
  }

  async selectSyntax() {
    await this.findSyntax.click();
    await (await this.findField).setValue('Bash');
    await browser.pause(2000);
    await this.findBashInSyntax.click();
    await browser.pause(2000);

  }

  async addTextTitle(text) {
    await this.inputPasteTitle.addValue(text);
  }

  async buttonClick() {
    await this.buttonEl.click();
  }
}

module.exports = new HomePage();
