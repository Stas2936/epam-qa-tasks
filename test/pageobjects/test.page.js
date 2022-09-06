const Page = require("./page");

class TestPage extends Page {
  get getAPasteTittle() {
    return $('//h1[text()="how to gain dominance among developers"]');
  }
  get buttonBash() {
    return $('//a[text()="Bash"]');
  }
  get pastedCode() {
    return $('//textarea[@class="textarea -raw js-paste-raw"]');
  }
}

module.exports = new TestPage();
