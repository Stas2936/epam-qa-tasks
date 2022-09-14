class TestPage {
  get region() {
    return $("//div[contains(text(),'Region: Frankfurt')]");
  }

  get vmClass() {
    return $("//div[contains (text(),'Provisioning model: Regular')]");
  }

  get instanceType() {
    return $("//div[contains (text(),'Instance type: n1-standard-8')]");
  }

  get localSsd() {
    return $("//div[@ng-class=\"item.items.isSsdCommitted ? 'cpc-cart-multiline' : ''\"]");
  }

  get commitmentTerm() {
    return $("//div[contains(text(),'Commitment term: 1 Year')]");
  }

  get price() {
    return $("//h2[@class='md-title']/b");
  }
}

module.exports = new TestPage();
