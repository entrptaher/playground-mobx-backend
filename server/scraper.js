import puppeteer from "puppeteer";
import fs from "fs";
import './chrome';

const builtDriver = fs.readFileSync("build/driver.js", "utf-8");

export default async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(builtDriver);

  await page.goto("https://example.com#test");
  const location = await page.$aLocation();

  await browser.close();

  console.log({ location });
};
