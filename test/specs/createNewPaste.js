const homePage = require("../pageobjects/HomePage");
const text = "Hello from WebDrive";
const pasteTitle = "helloweb";

describe("Create new paste", () => {
  it("Just create", async () => {
    await homePage.open();
    await homePage.addCodeText(text);
    await homePage.selectExpiration();
    await homePage.addTextTitle(pasteTitle);
    await homePage.buttonClick();
  });
});
