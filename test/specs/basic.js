const homePage = require("../pageobjects/homepage");
const fillCalculator = require("../pageobjects/filling_out_the_form");
const YOPmail = require("../pageobjects/YOPmail");

describe("Hurt Me Planty", () => {
  it("1", async () => {
    await homePage.open();
    await homePage.windowSize();
    await homePage.clickInputButton();
    await homePage.clickOnLink();
    await homePage.swithToFrame();
    await fillCalculator.addValueInstance("4");
    await fillCalculator.selectOperatingSystem();
    await fillCalculator.selectVmClass();
    await fillCalculator.selectSeries();
    await fillCalculator.selectMachineType();
    await fillCalculator.clickAddGpusCheckBox();
    await fillCalculator.selectGpuType();
    await fillCalculator.selectNumberOfGpus();
    await fillCalculator.selectLocalSsd();
    await fillCalculator.selectLocationCenter();
    await fillCalculator.selectCommitedUsage();
    await fillCalculator.clickOnButton();
    await browser.switchToFrame(null);
    await browser.newWindow("https://yopmail.com/");
    await YOPmail.clickRandomMail();
    await YOPmail.copyMail();
    await browser.switchWindow("Google Cloud Pricing Calculator");
    await homePage.swithToFrame();
    await browser.pause(2000);
    await fillCalculator.clickEmailButton();
    await browser.pause(2000);
    await fillCalculator.clickEmailString();
    await browser.pause(2000);
    await fillCalculator.sendEmail();
    const costOnGoogle = await fillCalculator.getCostOnGoogle();
    await browser.switchToFrame(null);
    await browser.pause(5000);
    await browser.switchWindow("https://yopmail.com/ru/email-generator");
    await YOPmail.checkMail();
    await browser.switchToFrame(await $("#ifmail"));
    await browser.pause(2000);
    expect(costOnGoogle).toHaveTextContaining(
      (await YOPmail.costInMail).getText()
    );
  });
});
