const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const BoardsPage = require("../pageobjects/boards.page");
const SearchPage = require("../pageobjects/search.page");
const WorkspacePage = require("../pageobjects/workspace.page");
const { waitUntilPageLoads } = require("../utils/waiters");
const {
  USER_EMAIL,
  USER_PW,
  PAGE_URL,
  CARD_NAME,
  BOARD_NAME,
  SEARCH_URL,
} = require("../utils/config");

describe("Verify advanced search function", () => {
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login(USER_EMAIL, USER_PW);
    await waitUntilPageLoads();

    await expect(browser).toHaveUrlContaining(PAGE_URL);
    const numberOfBoards = await WorkspacePage.countBoards();
    await expect(numberOfBoards).toBeGreaterThan(1);

    await WorkspacePage.openFirstBoard();
    await waitUntilPageLoads();
  });

  afterEach(async () => {
    await browser.reloadSession();
  });

  it("should show advanced search results based on query parameter", async () => {
    await browser.url(SEARCH_URL);
    await SearchPage.startSearch(CARD_NAME);

    const searchResultTitle = await SearchPage.getSearchResultTitle();
    await expect(searchResultTitle).toEqual(CARD_NAME);
  });

  it("should redirect to the board page when clicked on the board query", async () => {
    await browser.url(SEARCH_URL);
    await SearchPage.startSearch(BOARD_NAME);
    await SearchPage.loadBoardPage();

    const headerText = await BoardsPage.getBoardsHeaderText();
    await expect(headerText).toBe(BOARD_NAME);
  });
});
