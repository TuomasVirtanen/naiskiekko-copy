// Import needed modules
import { getCount, getInnerText } from "./HTMLutil.js";

/**
 * Parse all games in a day to JSON with the provided page object.
 *
 * @async
 * @function gamesOfDayToJSON
 * @param {Page} doc
 * @returns
 */
const gamesOfDayToJSON = async (doc) => {
  const games = [];
  let date = "";

  const outerRow = await getCount(doc, "//span/div");

  for (let i = 1; i <= outerRow; i++) {
    const innerRow = await getCount(doc, `//span/div[${i}]/div`);

    for (let j = 1; j <= innerRow; j++) {
      const outerDiv = outerRow > 1 ? `div[${i}]` : "div";
      const innerDiv = innerRow > 1 ? `div[${j}]` : "div";

      // Parse a single game in JSON
      const { gameDate, gameObj } = await gameToJSON(
        doc,
        `//span/${outerDiv}/${innerDiv}/div/table[1]/tbody`
      );

      date = gameDate;
      games.push(gameObj);
    }
  }

  // Return games of day object
  return { date: date, games: games };
};

/**
 * Parse a single game to JSON with the provided page object.
 *
 * @async
 * @function gameToJSON
 * @param {Page} doc
 * @param {String} prefix
 * @returns
 */
const gameToJSON = async (doc, prefix = "") => {
  // Construct an object from the data
  const gameObj = {
    teams: await getTeams(doc, prefix),
    matchResult: await getMatchResult(doc, prefix),
    periodScore: await getPeriodScore(doc, prefix),
    gameDetails: await getGameDetails(doc, prefix),
  };
  const gameDate = gameObj.gameDetails.gameDate;

  // Return an object with the game data and the date
  return { gameDate, gameObj };
};

/**
 * Return a teams object from the provided page object.
 *
 * @async
 * @function getTeams
 * @param {Page} doc
 * @param {String} prefix
 * @returns {Promise<{homeTeam: String, awayTeam: String}>}
 */
const getTeams = async (doc, prefix = "") => {
  const homeTeam = await getInnerText(
    doc,
    `${prefix}/tr[1]/td[1]/table/tbody/tr[1]/td[2]`
  );
  const awayTeam = await getInnerText(
    doc,
    `${prefix}/tr[1]/td[1]/table/tbody/tr[3]/td[2]`
  );

  return { homeTeam: homeTeam, awayTeam: awayTeam };
};

/**
 * Return a match result object from the provided page object.
 *
 * @async
 * @function getMatchResult
 * @param {Page} doc
 * @param {String} prefix
 * @returns {Promise<{homeTeamGoals: String, awayTeamGoals: String, finishedType: String}>}
 */
const getMatchResult = async (doc, prefix = "") => {
  const homeTeamGoals = await getInnerText(
    doc,
    `${prefix}/tr[1]/td[2]/table/tbody/tr[1]/td`
  );
  const finishedType = await getInnerText(
    doc,
    `${prefix}/tr[1]/td[2]/table/tbody/tr[2]/td`
  );
  const awayTeamGoals = await getInnerText(
    doc,
    `${prefix}/tr[1]/td[2]/table/tbody/tr[3]/td`
  );

  return {
    homeTeamGoals: homeTeamGoals,
    awayTeamGoals: awayTeamGoals,
    finishedType: finishedType,
  };
};

/**
 * Return a period score object from the provided page object.
 *
 * @async
 * @function getPeriodScore
 * @param {Page} doc
 * @param {String} prefix
 * @returns {Promise<{homeTeamGoals: [], awayTeamGoals: []}>}
 */
const getPeriodScore = async (doc, prefix = "") => {
  let homeTeamPeriodCount = await getCount(
    doc,
    `${prefix}/tr[1]/td[3]/table/tbody/tr[1]/td/span`
  );
  let awayTeamPeriodCount = await getCount(
    doc,
    `${prefix}/tr[1]/td[3]/table/tbody/tr[3]/td/span`
  );

  // If either of the teams have played 0 periods return empty lists
  if (homeTeamPeriodCount == 0 || awayTeamPeriodCount == 0) {
    return {
      homeTeamGoals: [],
      awayTeamGoals: [],
    };
    // Else get and return the results from the periods played
  } else {
    return {
      homeTeamGoals: await getPeriodGoals(doc, prefix, homeTeamPeriodCount),
      awayTeamGoals: await getPeriodGoals(
        doc,
        prefix,
        awayTeamPeriodCount,
        false
      ),
    };
  }
};

/**
 * Return a period goals list from the provided page object.
 *
 * @async
 * @function getPeriodGoals
 * @param {Page} doc
 * @param {String} prefix
 * @param {Number} periodCount
 * @param {Boolean} home
 * @returns {Promise<String[]>}
 */
const getPeriodGoals = async (
  doc,
  prefix = "",
  periodCount = 0,
  home = true
) => {
  const goals = [];
  // Determine element index if the team specified is home team or away team
  const team = home ? 1 : 3;

  for (let i = 1; i <= periodCount; i++) {
    const goal = await getInnerText(
      doc,
      `${prefix}/tr[1]/td[3]/table/tbody/tr[${team}]/td/span[${i}]`
    );

    goals.push(goal);
  }

  return goals;
};

/**
 * Return a game details object from the provided page object.
 *
 * @async
 * @function getGameDetails
 * @param {Page} doc
 * @param {String} prefix
 * @returns {Promise<{gameDate: String, gameTime: String, serieName: String, gameArena: String}>}
 */
const getGameDetails = async (doc, prefix = "") => {
  const gameDate = await getInnerText(doc, `${prefix}/tr[2]/td[1]`);
  const gameTime = await getInnerText(doc, `${prefix}/tr[2]/td[3]`);
  const serieName = await getInnerText(doc, `${prefix}/tr[2]/td[2]`);
  const gameArena = await getInnerText(doc, `${prefix}/tr[2]/td[4]`);

  return {
    gameDate: gameDate,
    gameTime: gameTime,
    serieName: serieName,
    gameArena: gameArena,
  };
};

// Export utility functions as a module
export { gameToJSON, gamesOfDayToJSON };
