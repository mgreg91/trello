const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");
const { waitUntilPageLoads } = require("../../utils/waiters");
const { USER_EMAIL, USER_PW, CARD_NAME, BOARD_NAME, SEARCH_URL } = require("../../utils/config");
const LoginPage = require("../../pageobjects/login.page");
const BoardsPage = require("../../pageobjects/boards.page");
const SearchPage = require("../../pageobjects/search.page");

Given("the user is loggedin", async () => {
  await browser.maximizeWindow();
  await LoginPage.open();
  await LoginPage.login(USER_EMAIL, USER_PW);
  await waitUntilPageLoads();
});

Given("the user is at the search page", async () => {
  await browser.url(SEARCH_URL);
  await waitUntilPageLoads();
});

When("the user enters a card name into the search bar", async () => {
  await SearchPage.startSearch(CARD_NAME);
});

Then("the search result is displayed containing the card", async () => {
  const searchResultTitle = await SearchPage.getSearchResultTitle();
  await expect(searchResultTitle).toEqual(CARD_NAME);
});

Given("the user entered a board name into the search bar", async () => {
  await SearchPage.startSearch(BOARD_NAME);
});

When("the user clicks on board search result", async () => {
  await SearchPage.loadBoardPage();
});

Then("the user is redirected to that board", async () => {
  const headerText = await BoardsPage.getBoardsHeaderText();
  await expect(headerText).toBe(BOARD_NAME);
});
