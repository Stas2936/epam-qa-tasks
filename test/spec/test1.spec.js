const { expect } = require("chai");
const { Builder, By, Key, until } = require("selenium-webdriver");

describe("bring it me", function bring() {
  let driver = new Builder().forBrowser("chrome").build();
  before(async function () {
    await driver.get("https://pastebin.com");
    await driver.manage().window().maximize();
    await driver
      .findElement(By.id("postform-text"))
      .sendKeys(
        'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force',
        Key.RETURN
      );
    await driver
      .findElement(By.id("select2-postform-format-container"))
      .click();
    await driver.findElement(By.xpath('//li[text()="Bash"]')).click();
    await driver
      .findElement(By.xpath('//*[@id="select2-postform-expiration-container"]'))
      .click();
    await driver.findElement(By.xpath("//li[text()='1 Day']")).click();

    await driver
      .findElement(By.xpath('//*[@id="postform-name"]'))
      .sendKeys("how to gain dominance among developers", Key.RETURN);
    await driver.wait(until.urlMatches("https://pastebin.com/*"));
  });

  it("first test", async function () {
    console.log("--------------------" + (await driver.getCurrentUrl()));
    let getATittle = await driver.getTitle();
    let getApasteTittle = await driver
      .findElement(
        By.xpath('//h1[text()="how to gain dominance among developers"]')
      )
      .getText();
    expect(getATittle).to.be.contain(getApasteTittle);
  });

  it("second test", async function () {
    let pte = await driver
      .findElement(By.xpath('//a[text()="Bash"]'))
      .isDisplayed();
    expect(pte).to.be.equal(true);
  });

  it("third test", async function () {
    let third = await driver
      .findElement(By.xpath('//textarea[@class="textarea -raw js-paste-raw"]'))
      .getText();
    expect(third).to.be.equal(
      'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force'
    );
  });
});
