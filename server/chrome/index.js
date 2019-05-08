const { Page } = require("puppeteer/lib/Page");

async function location () {
  return this.evaluate(() => {
    setLocation();
    return getLocationHref();
  });
};

// we prefix all of our custom functions with $a
// to distinguish between the built in and custom ones
Page.prototype.$aLocation = location;