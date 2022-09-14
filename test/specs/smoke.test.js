const homePage = require("../pageobjects/HomePage");
const yopMail = require("../pageobjects/YopMailPage");

describe("Hardcore", () => {
  it("Open browser", async () => {
    await homePage.open();
    await homePage.windowSize();
    expect(browser).toHaveTitleContaining("google");
  });
  it("Filling form", async () => {
    await homePage.clickInputButton();
    await homePage.clickOnLink();
    expect(browser).toHaveTitle("Google Cloud Pricing Calculator");
  });

  it("Open mail page and create mail account", async () => {
    await yopMail.openMail();
    await yopMail.clickRandomMail();
    await yopMail.checkMail();
    expect(browser).toHaveTitleContaining("Входящие");
  });
});
