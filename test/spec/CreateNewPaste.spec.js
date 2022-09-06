let homepage = require("../page/Homepage");
let code =
  'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force';
let title = "how to gain dominance among developers";

describe("I Can Win", function () {
  it("Create New Paste", async function () {
    await homepage.open();
    await homepage.addCode(code);
    await homepage.select_expiration();
    await homepage.pasteTitleName(title);
    await homepage.createNewPaste();
  });
});
