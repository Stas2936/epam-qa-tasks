const Page = require("./BasePage");

class TestPage extends Page {
  get buttonBash() {
    return $('//a[text()="Bash"]');
  }
  get pastedCode() {
    return $('//textarea[@class="textarea -raw js-paste-raw"]');
  }
  async getTitle() {
    return await super.getTitle();
  }
}

module.exports = new TestPage();
