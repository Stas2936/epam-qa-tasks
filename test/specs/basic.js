const homePage = require("../pageobjects/homepage");
const fillForm = require("../pageobjects/filling_out_the_form");
const test = require("../pageobjects/test");

describe("Hurt Me Planty", () => {
  before(async () => {
    await homePage.open();
    await homePage.windowSize();
    await homePage.clickInputButton();
    await homePage.clickOnLink();
    await homePage.switchFrame();
    await fillForm.addValueInstance("4");
    await fillForm.selectOperatingSystem();
    await fillForm.selectVmClass();
    await fillForm.selectSeries();
    await fillForm.selectMachineType();
    await fillForm.clickAddGpusCheckBox();
    await fillForm.selectGpuType();
    await fillForm.selectNumberOfGpus();
    await fillForm.selectLocalSsd();
    await fillForm.selectLocationCenter();
    await fillForm.selectCommitedUsage();
    await fillForm.clickOnButton();
  });

  it("Region should be equal 'Frankfurt'", async () => {
    await expect(test.region).toHaveTextContaining("Region: Frankfurt");
  });

  it("Provisioning model should be equal 'Regular'", async () => {
    await expect(test.vmClass).toHaveTextContaining(
      "Provisioning model: Regular"
    );
  });

  it("Commitment term sould be equal '1 Year' ", async () => {
    await expect(test.commitmentTerm).toHaveTextContaining(
      "Commitment term: 1 Year"
    );
  });

  it("Instance type should be equal 'n1-standart-8'", async () => {
    await expect(test.instanceType).toHaveTextContaining(
      "Instance type: n1-standard-8"
    );
  });

  it("Local SSD should be equal '2x375GB'", async () => {
    await expect(test.localSsd).toHaveTextContaining("Local SSD: 2x375 GB");
  });

  it("price should be equel 'USD 1,081.20'", async () => {
    await expect(test.price).toHaveTextContaining("USD 1,081.20");
  });
});
