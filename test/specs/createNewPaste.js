const homePage = require("../pageobjects/home.page");

describe("Create new paste", () => {
  it("Just create", async () => {
    await homePage.open();
    await homePage.addCodeText("Hello from WebDrive");
    await homePage.selectExpiration();
    await homePage.addTextTitle("helloweb");
    await homePage.buttonClick();
  });
});
