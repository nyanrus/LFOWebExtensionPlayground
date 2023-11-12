(async () => {
  const browser = await import("webextension-polyfill");
  const content = await import(browser.runtime.getURL("content.js"));
  await import(content);
})();
