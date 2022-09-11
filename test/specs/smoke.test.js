const homePage = require("../pageobjects/homepage");
const YOPmail = require("../pageobjects/YOPmail");

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
    await YOPmail.openMail();
    await YOPmail.clickRandomMail();
    await YOPmail.checkMail();
    expect(browser).toHaveTitleContaining("Входящие");
  });
});
