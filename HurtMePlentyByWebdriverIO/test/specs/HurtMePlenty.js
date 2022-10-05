const homePage = require("../pageobjects/HomePage");
const calculationPage = require("../pageobjects/CalculationPage");
const testPage = require("../pageobjects/TestPage");

describe("Hurt Me Planty", () => {
  before(async () => {
    await homePage.open();
    await homePage.windowSize();
    await homePage.clickInputButton();
    await homePage.clickOnLink();
    await calculationPage.switchFrame();
    await calculationPage.addValueInstance();
    await calculationPage.selectOperatingSystem();
    await calculationPage.selectVmClass();
    await calculationPage.selectSeries();
    await calculationPage.selectMachineType();
    await calculationPage.clickAddGpusCheckBox();
    await calculationPage.selectGpuType();
    await calculationPage.selectNumberOfGpus();
    await calculationPage.selectLocationCenter();
    await calculationPage.selectLocalSsd();
    await calculationPage.selectCommitedUsage();
    await calculationPage.clickOnButton();
  });

  it("Region should be equal 'Frankfurt'", async () => {
    await expect(testPage.region).toHaveTextContaining("Region: Frankfurt");
  });

  it("Provisioning model should be equal 'Regular'", async () => {
    await expect(testPage.vmClass).toHaveTextContaining(
      "Provisioning model: Regular"
    );
  });

  it("Commitment term sould be equal '1 Year' ", async () => {
    await expect(testPage.commitmentTerm).toHaveTextContaining(
      "Commitment term: 1 Year"
    );
  });

  it("Instance type should be equal 'n1-standart-8'", async () => {
    await expect(testPage.instanceType).toHaveTextContaining(
      "Instance type: n1-standard-8"
    );
  });

  it("Local SSD should be equal '2x375GB'", async () => {
    await expect(testPage.localSsd).toHaveTextContaining("Local SSD: 2x375 GB");
  });

  it("price should be equel 'USD 1,081.20'", async () => {
    await expect(testPage.price).toHaveTextContaining("USD 1,081.20");
  });
});
