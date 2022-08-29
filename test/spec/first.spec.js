const { Builder, Key, By } = require("selenium-webdriver");

describe("I Can Win", function () {
  it("frist task", async function () {
    const driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://pastebin.com/");
    await driver
      .findElement(By.id("postform-text"))
      .sendKeys("Hello from WebDrive");
    await driver
      .findElement(By.xpath('//*[@id="select2-postform-expiration-container"]'))
      .click();
    await driver.findElement(By.xpath("//li[text()='10 Minutes']")).click();

    await driver
      .findElement(By.xpath('//*[@id="postform-name"]'))
      .sendKeys("helloweb",Key.ENTER);
  });
});
