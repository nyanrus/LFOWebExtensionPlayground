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
