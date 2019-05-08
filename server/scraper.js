import puppeteer from "puppeteer";
import fs from "fs";

const builtDriver = fs.readFileSync("build/driver.js", "utf-8");

export default async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(builtDriver);

  await page.goto("https://example.com");
  const location = await page.evaluate(() => getLocation());
  await browser.close();
  
  console.log({ location });
};
