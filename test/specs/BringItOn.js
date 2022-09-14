const homePage = require("../pageobjects/HomePage");
const testPage = require("../pageobjects/TestPage");
const code =
  'git config --global user.name"New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m"Legacy code")\ngit push origin master --force';
const title = "how to gain dominance among developers";

describe("'Bring It On' By WebDriverIO", () => {
  before(async () => {
    await homePage.open();
    await homePage.addCodeText(code);
    await homePage.selectExpiration();
    await homePage.selectSyntax();
    await homePage.addTextTitle(title);
    await homePage.createNewPasteButtonClick();
  });
  it("Syntax highlighted for Bash", async () => {
    await (await testPage.buttonBash).waitForDisplayed();
    await expect(testPage.buttonBash).toBeDisplayed();
  });
  it("Page title match to pasted title", async () => {
    await expect(browser).toHaveTitleContaining(title);
  });
  it("Pasted code should be equal ", async () => {
    await expect(testPage.pastedCode).toHaveText(code);
    await browser.pause(10000);
  });
});
