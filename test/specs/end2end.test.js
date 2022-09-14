const homePage = require("../pageobjects/HomePage");
const calculationPage = require("../pageobjects/CalculationPage");
const yopMail = require("../pageobjects/YopMailPage");
const { priceOnCalculationPage } = require("../../utils/proofs");

describe("Hardcore", () => {
  it("Price on the google page should be equal price in the message", async () => {
    await homePage.open();
    await homePage.windowSize();
    await homePage.clickInputButton();
    await homePage.clickOnLink();
    await calculationPage.swithToFrame();
    await calculationPage.addValueInstance();
    await calculationPage.selectOperatingSystem();
    await calculationPage.selectVmClass();
    await calculationPage.selectSeries();
    await calculationPage.selectMachineType();
    await calculationPage.clickAddGpusCheckBox();
    await calculationPage.selectGpuType();
    await calculationPage.selectNumberOfGpus();
    await calculationPage.selectLocalSsd();
    await calculationPage.selectLocationCenter();
    await calculationPage.selectCommitedUsage();
    await calculationPage.clickOnButton();
    await yopMail.openMail();
    await yopMail.clickRandomMail();
    await yopMail.copyMail();
    await yopMail.switchWindowToCalculator();
    await calculationPage.swithToFrame();
    await calculationPage.clickEmailButton();
    await calculationPage.pasteEmail();
    await calculationPage.sendEmailClick();
    await calculationPage.switchWindowToYopMail();
    await yopMail.checkMail();
    await yopMail.switchMailFrame();
    expect((await yopMail.costInMail).getText()).toHaveTextContaining(
      priceOnCalculationPage
    );
  });
});
