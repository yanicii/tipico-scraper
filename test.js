const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.youpriboo.com/", {
    waitUntil: "networkidle0",
  });
  const text = await page.evaluate(() => {
    return document.querySelector(".mainnaviselected").textContent;
  });
  console.log(text.trim())
  await browser.close();
})();