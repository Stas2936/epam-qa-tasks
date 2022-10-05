const BasePage = require("./BasePage");

class HomePage extends BasePage {
  get inputCodeField() {
    return $("#postform-text");
  }

  get findExperationField() {
    return $("#select2-postform-expiration-container");
  }

  get findExperation10Minutes() {
    return $("//li[text()='10 Minutes']");
  }

  get findSyntaxField() {
    return $("#select2-postform-format-container");
  }

  get findFieldInSyntax() {
    return $(".select2-search__field");
  }

  get findBashInSyntax() {
    return $(
      "//li[@class='select2-results__option select2-results__option--highlighted']"
    );
  }

  get inputPasteTitleField() {
    return $("#postform-name");
  }

  get createNewPasteButton() {
    return $("//button[@class='btn -big']");
  }

  async addCodeText(code) {
    await this.inputCodeField.addValue(code);
  }

  async selectExpiration() {
    await this.findExperationField.click();
    await this.findExperation10Minutes.click();
  }

  async selectSyntax() {
    await this.findSyntaxField.click();
    await (await this.findFieldInSyntax).waitForExist();
    await (await this.findFieldInSyntax).setValue("Bash");
    await this.findBashInSyntax.click();
  }

  async addTextTitle(text) {
    await this.inputPasteTitleField.addValue(text);
  }

  async createNewPasteButtonClick() {
    await this.createNewPasteButton.click();
  }
}

module.exports = new HomePage();
