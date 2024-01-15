/**
 * Return an inner HTML string from the provided HTML selector.
 *
 * @async
 * @function getHTML
 * @param {Page} page
 * @param {String} targetSelector
 * @param {String} HTMLSelector
 * @param {{click: Boolean, multipleTargets: Boolean}}
 * @returns {Promise<String>}
 */
const getHTML = async (
  page,
  targetSelector = "",
  HTMLSelector = "",
  actions = { click: false, multipleTargets: false }
) => {
  // If click action is defined
  if (actions.click) {
    // If there are many clickable targets click them all
    if (actions.multipleTargets) {
      const count = await getCount(page, targetSelector);

      page = await clickMultipleElements(page, targetSelector, count);
      // Else click the specified element once
    } else {
      page = await clickElement(page, targetSelector);
    }
  }

  return await page.innerHTML(HTMLSelector);
};

/**
 * Click multiple elements with similar selector.
 *
 * @async
 * @function clickMultipleElements
 * @param {Page} page
 * @param {String} targetSelector
 * @param {Number} count
 * @returns {Promise<Page>}
 */
const clickMultipleElements = async (page, targetSelector = "", count = 0) => {
  for (let index = 1; index <= count; index++) {
    let clickableSelector = `${targetSelector}[${index}]`;

    // Click the specified element once
    page = await clickElement(page, clickableSelector);
  }

  return page;
};

/**
 * Click a single element using the provided selector.
 *
 * @async
 * @function clickElement
 * @param {Page} page
 * @param {String} targetSelector
 * @returns {Promise<Page>}
 */
const clickElement = async (page, targetSelector = "") => {
  await page.locator(targetSelector).click();

  return page;
};

/**
 * Return inner text from an element using the specified selector.
 *
 * @async
 * @function getInnerText
 * @param {Page} page
 * @param {String} selector
 * @returns {Promise<String>}
 */
const getInnerText = async (page, selector = "") =>
  await page.locator(selector).innerText();

/**
 * Return element count using the specified selector.
 *
 * @async
 * @function getCount
 * @param {Page} page
 * @param {String} selector
 * @returns {Promise<Number>}
 */
const getCount = async (page, selector = "") =>
  await page.locator(selector).count();

// Export utility functions as a module
export { getHTML, clickElement, clickMultipleElements, getInnerText, getCount };
