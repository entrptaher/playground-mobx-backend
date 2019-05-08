import puppeteer from "puppeteer";
import fs from "fs";

export default async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(fs.readFileSync("build/driver.js", "utf-8"));

  await page.goto("https://example.com");
  const location = await page.evaluate(() => getLocation());
  await browser.close();
  
  console.log({ location });
};
