/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const waitForElement = async (selector) => {
  const query = document.querySelector(selector);
  if (query) return query;

  const observer = new MutationObserver((mutations, observer) => {
    const query = document.querySelector(selector);
    if (query) {
      observer.disconnect();
      return query;
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

export { waitForElement };
