const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");
const { waitUntilPageLoads, waitUntilElemDisplayed, waitAndClick } = require("../../utils/waiters");
const { makeTextUrlCompatible } = require("../../utils/helper");
const { USER_EMAIL, USER_PW, BOARD_NAME } = require("../../utils/config");
const LoginPage = require("../../pageobjects/login.page");
const BoardsPage = require("../../pageobjects/boards.page");
const WorkspacePage = require("../../pageobjects/workspace.page");

Given("the user is logged in on the Trello Dashboard page", async () => {
  await LoginPage.open();
  await LoginPage.login(USER_EMAIL, USER_PW);
  await waitUntilPageLoads();
});

When("the user clicks on the Create button in the main menu", async () => {
  await waitUntilElemDisplayed(WorkspacePage.boardsTile);
  await waitAndClick(WorkspacePage.btnCreate);
});

When("the user clicks on the Create new board button", async () => {
  await waitAndClick(WorkspacePage.btnCreateBoard);
});

When("the user provides {string} as a board name", async (boardname) => {
  await WorkspacePage.txtCreateBoardTitle.setValue(boardname);
});

When("the user clicks on the Create button inside the form", async () => {
  await waitAndClick(WorkspacePage.btnCreateBoardSubmit);
});

Then("the new board is created", async () => {
  await waitUntilElemDisplayed(BoardsPage.boardsHeader);
  const header = await BoardsPage.boardsHeader;
  const headerText = await header.getText();
  await expect(headerText).toBe(BOARD_NAME);
});

Then("the user is redirected to the newly created board page", async () => {
  const boardUrl = await makeTextUrlCompatible(BOARD_NAME);
  await expect(browser).toHaveUrlContaining(boardUrl);
});
