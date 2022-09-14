const {
  titleBasePage,
  titleCalculationPage,
  titleYopMail,
} = require("../../utils/verification");
const homePage = require("../pageobjects/HomePage");
const YOPmail = require("../pageobjects/YopMailPage");

describe("Hardcore", () => {
  it("Open browser", async () => {
    await homePage.open();
    await homePage.windowSize();
    expect(browser).toHaveTitleContaining(titleBasePage);
  });
  it("Filling form", async () => {
    await homePage.clickInputButton();
    //await homePage.clickOnLink();
    expect(browser).toHaveTitle(titleCalculationPage);
  });

  it("Open mail page and create mail account", async () => {
    await YOPmail.openMail();
    await YOPmail.clickRandomMail();
    await YOPmail.checkMail();
    expect(browser).toHaveTitleContaining(titleYopMail);
  });
});
