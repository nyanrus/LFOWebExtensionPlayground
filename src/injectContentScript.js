/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

// this is required because content script is not ESM
(async () => {
  console.log("hallo");
  const content = await import(chrome.runtime.getURL("content.js"));
  await import(content);
})();
