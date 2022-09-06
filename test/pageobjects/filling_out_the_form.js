class FillingTheForm {
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

  async addValueInstance(text) {
    await this.istance.click();
    await this.istance.setValue(text);
    await browser.pause(1000);
  }

  async selectOperatingSystem() {
    await this.operatingSystemField.click();
    await (await this.operatingSystemValue).waitForExist();
    await this.operatingSystemValue.click();
    await browser.pause(1000);
  }

  async selectVmClass() {
    await (await this.vmClassField).click();
    await (await this.vmClassValue).click();
    await browser.pause(1000);
  }

  async selectSeries() {
    await (await this.seriesField).click();
    await (await this.seriesValue).waitForExist();
    await (await this.seriesValue).click();
    await browser.pause(1000);
  }

  async selectMachineType() {
    await (await this.machineTypeField).click();
    await (await this.machineTypeValue).waitForExist();
    await (await this.machineTypeValue).click();
    await browser.pause(1000);
  }

  async clickAddGpusCheckBox() {
    await (await this.pCheckBox).click();
    await browser.pause(1000);
  }

  async selectGpuType() {
    await (await this.gpuTypeField).click();
    await (await this.gpuTypeValue).waitForExist();
    await (await this.gpuTypeValue).click();
    await browser.pause(1000);
  }

  async selectNumberOfGpus() {
    await (await this.numberOfGpusField).click();
    await (await this.numberOfGpusValue).waitForExist();
    await (await this.numberOfGpusValue).click();
    await browser.pause(1000);
  }

  async selectLocalSsd() {
    await (await this.localSsd).click();
    await (await this.localSsdModel).waitForExist();
    await (await this.localSsdModel).click();
    await browser.pause(1000);
  }

  async selectLocationCenter() {
    await browser.pause(2000);
    await (await this.dataCenterLocation).click();
    await (await this.dataCenterLocationFrankfurt).waitForExist();
    await browser.pause(2000);
    await (await this.dataCenterLocationFrankfurt).click();
    await browser.pause(2000);
  }

  async selectCommitedUsage() {
    await (await this.commitedUsage).click();
    await (await this.commitedUsage1year).waitForExist();
    await (await this.commitedUsage1year).click();
    await browser.pause(1000);
  }

  async clickOnButton() {
    await this.addToEstimateButton.click();
  }
}

module.exports = new FillingTheForm();
