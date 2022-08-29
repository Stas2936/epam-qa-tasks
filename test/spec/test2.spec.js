// const { expect } = require("chai");
// const { Builder, By, Key } = require("selenium-webdriver");

// describe("bring it me2", function bring() {    
    
//   it("first test2", async function () {
//     let driver = new Builder().forBrowser("chrome").build();
//     await driver.get("https://pastebin.com/WHmDjXfV");
//     await driver.manage().window().maximize();
//         let getATittle = await driver.getTitle();
//     let getApasteTittle = await driver
//       .findElement(
//         By.xpath('//h1[text()="how to gain dominance among developers"]')
//       )
//       .getText();
//     expect(getATittle).to.be.contain(getApasteTittle);
//   });

//   it("second test2", async function () {
//     const driver = await new Builder().forBrowser("chrome").build();
//     await driver.get("https://pastebin.com/pLfbczKr");
//     await driver.manage().window().maximize();
//     let pte = await driver
//       .findElement(By.xpath('//a[text()="Bash"]'))
//       .isDisplayed();
//     expect(pte).to.be.eql(true);
//   });

//   it("third test2", async function () {
//     const driver = await new Builder().forBrowser("chrome").build();
//     await driver.get("https://pastebin.com/pLfbczKr");
//     await driver.manage().window().maximize();
//     let third = await driver
//       .findElement(By.xpath('//textarea[@class="textarea -raw js-paste-raw"]'))
//       .getText();
//     expect(third).to.be.eql(
//       'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force'
//     );
//   });
// });
