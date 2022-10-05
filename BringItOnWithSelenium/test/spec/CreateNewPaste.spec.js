const homePage = require("../page/HomePage");
const testPage = require("../page/TestPage");
const { expect } = require("chai");
let code =
  'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force';
let titleName = "how to gain dominance among developers";

describe("bring it on", function () {
  before(async () => {
    await homePage.open();
    await homePage.addCode(code);
    await homePage.selectSyntax();
    await homePage.selectExpiration();
    await homePage.pasteTitleName(titleName);
    await homePage.createNewPaste();
    console.log(await testPage.getTitle());
  });

  it("check browser page title", async function () {
    expect(await testPage.getTitle()).to.be.contain(titleName);
  });

  it("button is displayed", async function () {
    expect(await testPage.buttonIsDisplayed()).to.be.true;
  });

  it("code matches the input", async function () {
    expect(await testPage.addedText()).to.be.equal(code);
  });
});
