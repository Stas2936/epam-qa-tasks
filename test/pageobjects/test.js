class TestPage {
  get region() {
    return $("//md-list-item[@class='md-1-line md-no-proxy'][1]");
  }

  get vmClass() {
    return $("//div[contains (text(),'Provisioning model: Regular')]");
  }

  get instanceType() {
    return $("//div[contains (text(),'Instance type: n1-standard-8')]");
  }

  get localSsd() {
    return $('//*[@id="compute"]/md-list/md-list-item[7]/div[1]');
  }

  get commitmentTerm() {
    return $('//*[@id="compute"]/md-list/md-list-item[3]/div');
  }

  get price() {
    return $('//*[@id="resultBlock"]/md-card/md-card-content/div/div/div/h2/b');
  }
}

module.exports = new TestPage();
