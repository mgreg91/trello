async function waitUntilPageLoads(timeout = 60000) {
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout,
      timeoutMsg: `The page didn't load after ${timeout}ms`,
    }
  );
}

async function waitUntilPageOpened(url, timeout = 60000) {
  await browser.waitUntil(
    async function () {
      const currentUrl = await browser.getUrl();
      return currentUrl.includes(url);
    },
    {
      timeout,
    }
  );
}

async function waitUntilElemDisplayed(elem, timeout = 15000) {
  await browser.waitUntil(
    async function () {
      return elem.isDisplayed();
    },
    {
      timeout,
    }
  );
}

async function waitAndClick(elem, timeout = 15000) {
  await elem.waitForDisplayed({ timeout });
  await elem.waitForClickable();
  await elem.click();
}

module.exports = {
  waitUntilPageLoads,
  waitUntilPageOpened,
  waitUntilElemDisplayed,
  waitAndClick,
};
