// Import needed modules
import { clickElement, getHTML } from "./utils/HTMLutil.js";
import { gamesOfDayToJSON } from "./utils/JSONutil.js";

/**
 * Games of day in JSON format using specified selectors.
 *
 * @async
 * @function getGamesOfDay
 * @param {Page} page
 * @param {Page} dataHolderPage
 * @param {String} mainSelector
 * @param {String} dataSelector
 * @returns
 */
const getGamesOfDay = async (
  page,
  dataHolderPage,
  mainSelector,
  dataSelector
) => {
  // Wait for selector to be found
  await page.waitForSelector(mainSelector);

  // Get HTML string from the specified selectors
  const HTML = await getHTML(page, dataSelector, mainSelector, {
    click: true,
    multipleTargets: true,
  });

  // Store the HTML into the data holder
  await dataHolderPage.setContent(`<span>${HTML}</span>`);

  // Parse and return data in JSON
  return await gamesOfDayToJSON(dataHolderPage);
};

/**
 * Upcoming or previous games in JSON format using specified selectors.
 *
 * @async
 * @function getUpcomingOrPreviousGames
 * @param {Page} page
 * @param {Page} dataHolderPage
 * @param {String} mainSelector
 * @param {String} dataSelector
 * @param {String} navigationSelector
 * @returns
 */
const getUpcomingOrPreviousGames = async (
  page,
  dataHolderPage,
  mainSelector,
  dataSelector,
  navigationSelector
) => {
  let next = true;
  const allGames = [];

  // Wait for selector to be found
  await page.waitForSelector(mainSelector);

  // While there's games to be found
  while (next) {
    // Check navigation element visibility
    let selectorIsVisible = await page.isVisible(navigationSelector);

    // If the specified element is visible
    if (selectorIsVisible) {
      // Click the specified element using the selector
      page = await clickElement(page, navigationSelector);

      // Get games of day in JSON
      const gamesOfDay = await getGamesOfDay(
        page,
        dataHolderPage,
        mainSelector,
        dataSelector
      );

      allGames.push(gamesOfDay);
      // If the specified element is invisible, stop the loop
    } else {
      next = false;
    }
  }

  // Return games
  return allGames;
};

// Export functions as a module
export { getGamesOfDay, getUpcomingOrPreviousGames };
