// Import needed modules
import { chromium } from "playwright";
import { getGamesOfDay, getUpcomingOrPreviousGames } from "./games.js";

// Anonymous asynchronic main function
(async () => {
  // Open a browser
  const browser = await chromium.launch({ headless: true }); // Can be changed to false for visual browser launch

  try {
    // Open a browser context with 1080p viewport size
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
    });

    try {
      const URL = "https://tulospalvelu.leijonat.fi/";

      // Selectors used to find different data
      const mainSelector = "div[class=district-games-list]";
      const dataSelector = '//*[@id="xl-district-games"]/div[2]/div[2]/table';
      const navigateFwdSelector =
        '//*[@id="xl-district-games"]/div[1]/table/tbody/tr/td[3]/div/button';
      const navigateBwdSelector =
        '//*[@id="xl-district-games"]/div[1]/table/tbody/tr/td[1]/div/button';

      // Set a new page connected to the URL
      const nextPage = await setNewPage(context, URL);
      const prevPage = await setNewPage(context, URL);
      // Set a data holder page without a connection
      const dataHolderPage = await setNewPage(context);

      // Get games of day, upcoming and previous games
      const gamesOfDay = await getGamesOfDay(
        nextPage,
        dataHolderPage,
        mainSelector,
        dataSelector
      );
      const upcomingGames = await getUpcomingOrPreviousGames(
        nextPage,
        dataHolderPage,
        mainSelector,
        dataSelector,
        navigateFwdSelector
      );
      const previousGames = await getUpcomingOrPreviousGames(
        prevPage,
        dataHolderPage,
        mainSelector,
        dataSelector,
        navigateBwdSelector
      );

      /*

      TO-DO:
      Post data to server => gamesOfDay, upcomingGames, previousGames

      */
    } catch (err) {
      console.error(err);
    } finally {
      // Always close the browser context
      await context.close();
    }
  } catch (err) {
    console.error(err);
  } finally {
    // Always close the browser
    await browser.close();
  }
})();

/**
 * Iniate a new page and connect it to the given URL.
 *
 * @async
 * @function setNewPage
 * @param {BrowserContext} browserContext
 * @param {String} URL
 * @returns {Promise<Page>}
 */
const setNewPage = async (browserContext, URL = "") => {
  // Create a new page
  const page = await browserContext.newPage();

  // If URL exists the page will connect
  if (URL) {
    await page.goto(URL, {
      timeout: 60000,
    });
  }

  return page;
};
