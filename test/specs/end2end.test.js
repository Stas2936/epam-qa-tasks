const homePage = require("../pageobjects/homepage");
const fillCalculator = require("../pageobjects/filling_out_the_form");
const YOPmail = require("../pageobjects/YOPmail");

describe("Hardcore", () => {
  it("Price on the google page should be equal price in the message", async () => {
    await homePage.open();
    await homePage.windowSize();
    await homePage.clickInputButton();
    await homePage.clickOnLink();
    await fillCalculator.swithToFrame();
    await fillCalculator.addValueInstance();
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
    await YOPmail.openMail();
    await YOPmail.clickRandomMail();
    await YOPmail.copyMail();
    const windows = await browser.getWindowHandles();
    await browser.switchToWindow(windows[0]);
    await fillCalculator.swithToFrame();
    await fillCalculator.clickEmailButton();
    await fillCalculator.pasteEmail();
    await fillCalculator.sendEmail();
    const costOnGoogle = await fillCalculator.getCostOnGoogle();
    await browser.switchToWindow(windows[1]);
    await YOPmail.checkMail();
    await YOPmail.switchMailFrame();
    expect(costOnGoogle).toHaveTextContaining(
      (await YOPmail.costInMail).getText()
    );
  });
});
