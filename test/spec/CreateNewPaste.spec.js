let homepage = require("../page/Homepage");
let code = "Hello from WebDriver";
let title = "how to gain dominance among developers";

describe("I Can Win", function () {
  it("Create New Paste", async function () {
    await homepage.open();
    await homepage.addCode(code);
    await homepage.selectExpiration();
    await homepage.pasteTitleName(title);
    await homepage.createNewPaste();
  });
});
