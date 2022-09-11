class FillingTheCalculator {
  get istance() {
    return $(
      "//md-input-container/child::input[@ng-model='listingCtrl.computeServer.quantity']"
    );
  }

  get operatingSystemField() {
    return $("#select_value_label_82");
  }

  get operatingSystemValue() {
    return $("#select_option_92");
  }

  get vmClassField() {
    return $("#select_value_label_83");
  }

  get vmClassValue() {
    return $("#select_option_105");
  }

  get seriesField() {
    return $("#select_value_label_85");
  }

  get seriesValue() {
    return $("//md-option[@value='n1']");
  }

  get machineTypeField() {
    return $("#select_value_label_86");
  }

  get machineTypeValue() {
    return $("#select_option_424");
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
    return $("#select_value_label_418");
  }

  get localSsdModel() {
    return $("#select_option_445");
  }

  get dataCenterLocation() {
    return $("#select_value_label_88");
  }

  get dataCenterLocationFrankfurt() {
    return $("#select_option_227");
  }

  get commitedUsage() {
    return $("#select_value_label_89");
  }

  get commitedUsage1year() {
    return $("#select_option_128");
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

  get mainFrame() {
    return $("//devsite-iframe/iframe");
  }

  get secondFrame() {
    return $("#myFrame");
  }

  async swithToFrame() {
    await browser.switchToFrame(await this.mainFrame);
    await browser.switchToFrame(await this.secondFrame);
  }

  async addValueInstance() {
    await this.istance.click();
    await this.istance.setValue("4");
  }

  async selectOperatingSystem() {
    await this.operatingSystemField.click();
    await (await this.operatingSystemValue).waitForDisplayed();
    await this.operatingSystemValue.click();
  }

  async selectVmClass() {
    await (await this.vmClassField).click();
    await (await this.vmClassValue).waitForDisplayed();
    await (await this.vmClassValue).click();
  }

  async selectSeries() {
    await (await this.seriesField).click();
    await (await this.seriesValue).waitForDisplayed();
    await (await this.seriesValue).click();
  }

  async selectMachineType() {
    await (await this.machineTypeField).click();
    await (await this.machineTypeValue).waitForDisplayed();
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

  async clickEmailButton() {
    await (await this.emailButton).waitForDisplayed();
    await (await this.emailButton).click();
  }

  async pasteEmail() {
    await browser.pause(2000);
    await (await this.emailString).click();
    await browser.keys(["Control", "KeyV"]);
  }

  async sendEmail() {
    await (await this.sendEmmailButton).click();
  }
}

module.exports = new FillingTheCalculator();
