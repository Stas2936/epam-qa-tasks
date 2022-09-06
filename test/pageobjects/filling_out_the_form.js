class FillingTheCalculator {
  get istance() {
    return $(
      "//md-input-container/child::input[@ng-model='listingCtrl.computeServer.quantity']"
    );
  }

  get operatingSystemField() {
    return $("#select_value_label_81");
  }

  get operatingSystemValue() {
    return $("#select_option_91");
  }

  get vmClassField() {
    return $("#select_value_label_82");
  }

  get vmClassValue() {
    return $("#select_option_104");
  }

  get seriesField() {
    return $("#select_value_label_84");
  }

  get seriesValue() {
    return $("//md-option[@value='n1']");
  }

  get machineTypeField() {
    return $("#select_value_label_85");
  }

  get machineTypeValue() {
    return $("#select_option_423");
  }

  get pCheckBox() {
    return $("//md-checkbox[@aria-label='Add GPUs']");
  }

  get gpuTypeField() {
    return $("//md-select[@placeholder='GPU type']");
  }

  get gpuTypeValue() {
    return $("//md-option[@value='NVIDIA_TESLA_V100']");
  }

  get numberOfGpusField() {
    return $("//md-select[@placeholder='Number of GPUs']");
  }

  get numberOfGpusValue() {
    return $(
      "md-option[value='1'][class='ng-scope md-ink-ripple'][ng-disabled]"
    );
  }

  get localSsd() {
    return $("#select_value_label_417");
  }

  get localSsdModel() {
    return $("#select_option_444");
  }

  get dataCenterLocation() {
    return $("#select_122");
  }

  get dataCenterLocationFrankfurt() {
    return $("#select_option_226");
  }

  get commitedUsage() {
    return $("#select_129");
  }

  get commitedUsage1year() {
    return $("#select_option_127");
  }

  get addToEstimateButton() {
    return $("//button[@aria-label='Add to Estimate']");
  }

  get costOnGoogle() {
    return $("//*[@id='resultBlock']/md-card/md-card-content/div/div/div/h2/b");
  }

  get emailButton() {
    return $("#email_quote");
  }

  get emailString() {
    return $("//md-input-container/child::input[@type='email']");
  }

  get sendEmmailButton() {
    return $("//md-dialog-actions/child::button[@type='button'][2]");
  }

  async clickEmailButton() {
    await (await this.emailButton).click();
  }

  async clickEmailString() {
    await (await this.emailString).click();
    await browser.pause(1000);
    await browser.keys(["Control", "KeyV"]);
  }

  async sendEmail() {
    await (await this.sendEmmailButton).click();
  }

  async addValueInstance(text) {
    await this.istance.click();
    await this.istance.setValue(text);
  }

  async selectOperatingSystem() {
    await this.operatingSystemField.click();
    await browser.pause(1000);
    await this.operatingSystemValue.click();
  }

  async selectVmClass() {
    await (await this.vmClassField).click();
    await (await this.vmClassValue).click();
  }

  async selectSeries() {
    await (await this.seriesField).click();
    await browser.pause(1000);
    await (await this.seriesValue).click();
  }

  async selectMachineType() {
    await (await this.machineTypeField).click();
    await browser.pause(1000);
    await (await this.machineTypeValue).click();
  }

  async clickAddGpusCheckBox() {
    await (await this.pCheckBox).click();
  }

  async selectGpuType() {
    await (await this.gpuTypeField).click();
    await (await this.gpuTypeValue).waitForDisplayed();
    await (await this.gpuTypeValue).click();
  }

  async selectNumberOfGpus() {
    await (await this.numberOfGpusField).click();
    await (await this.numberOfGpusValue).waitForDisplayed();
    await (await this.numberOfGpusValue).click();
  }

  async selectLocalSsd() {
    await (await this.localSsd).click();
    await (await this.localSsdModel).waitForDisplayed();
    await (await this.localSsdModel).click();
  }

  async selectLocationCenter() {
    await (await this.dataCenterLocation).click();
    await (await this.dataCenterLocationFrankfurt).waitForDisplayed();
    await (await this.dataCenterLocationFrankfurt).click();
  }

  async selectCommitedUsage() {
    await (await this.commitedUsage).click();
    await (await this.commitedUsage1year).waitForDisplayed();
    await (await this.commitedUsage1year).click();
  }

  async clickOnButton() {
    await this.addToEstimateButton.click();
  }

  async getCostOnGoogle() {
    return await (await this.costOnGoogle).getText();
  }
}

module.exports = new FillingTheCalculator();
