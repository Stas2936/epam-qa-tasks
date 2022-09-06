const homePage = require("../pageobjects/home.page");
const testPage = require("../pageobjects/test.page");
const code =
  'git config --global user.name"New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m"Legacy code")\ngit push origin master --force';
const text = "how to gain dominance among developers";

describe("'Bring It On' By WebDriverIO", () => {
  before(async () => {
    await homePage.open();
    await homePage.addCodeText(code);
    await homePage.selectExpiration();
    await homePage.selectSyntax();
    await homePage.addTextTitle(text);
    await homePage.buttonClick();
  });
  it("Syntax highlighted for Bash", async () => {
    await expect(testPage.buttonBash).toBeDisplayed();
  });
  it("Page title match to pasted title", async () => {
    await expect(testPage.getAPasteTittle).toHaveTitle(await browser.getTitle());
  });
  it("Pasted code should be equal ", async () => {
    await expect(testPage.pastedCode).toHaveText(code);
  });
});
