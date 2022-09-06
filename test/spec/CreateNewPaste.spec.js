const homepage = require("../page/Homepage");
let tests = require("../page/Tests");
const { expect } = require("chai");
let code =
  'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force';
let titleName = "how to gain dominance among developers";

describe("bring it on", function () {
  before(async () => {
    await homepage.open();
    await homepage.addCode(code);
    await homepage.select_syntax();
    await homepage.select_expiration();
    await homepage.pasteTitleName("how to gain dominance among developers");
    await homepage.createNewPaste();
  });

  it("check browser page title", async function () {
    expect(await tests.get_Title()).to.be.contain(await tests.addedTitle());
  });

  it("button is displayed", async function () {
    expect(await tests.buttonIsDisplayed()).to.be.equal(true);
  });

  it("code matches the input", async function () {
    expect(await tests.addedText()).to.be.equal(code);
  });
});

