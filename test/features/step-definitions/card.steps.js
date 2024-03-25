const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");
const { waitUntilPageLoads, waitUntilElemDisplayed, waitAndClick } = require("../../utils/waiters");
const { USER_EMAIL, USER_PW, PAGE_URL, LIST_NAME, CARD_NAME } = require("../../utils/config");
const LoginPage = require("../../pageobjects/login.page");
const BoardsPage = require("../../pageobjects/boards.page");
const WorkspacePage = require("../../pageobjects/workspace.page");

Given("the user is logged in", async () => {
  await browser.maximizeWindow();
  await LoginPage.open();
  await LoginPage.login(USER_EMAIL, USER_PW);
  await waitUntilPageLoads();
});

Given("the user has a board", async () => {
  await expect(browser).toHaveUrlContaining(PAGE_URL);
});

Given("the user has opened that board", async () => {
  await WorkspacePage.openFirstBoard();
  await waitUntilPageLoads();
});

When("the user clicks on the Add new list button", async () => {
  await waitAndClick(BoardsPage.newListButton);
});

When("the user types in a name for the list", async () => {
  const numberOfLists = await BoardsPage.textAreaForList.length;
  await BoardsPage.textAreaForList[numberOfLists - 1].setValue(LIST_NAME);
});

When("the user clicks on the Add list button", async () => {
  await waitAndClick(BoardsPage.btnAddList);
});

Then("the new list is created", async () => {
  const isCreated = await BoardsPage.isNewListCreated(LIST_NAME);
  return await expect(isCreated).toBe(true);
});

Given("the user is on the board page", async () => {
  await expect(browser).toHaveUrlContaining("my-very-first-board");
});

Given("the user has at least one list item", async () => {
  const numberOfList = await BoardsPage.countLists();
  await expect(numberOfList).toBeGreaterThanOrEqual(1);
});

When("the user clicks on the Add a card button", async () => {
  await waitUntilElemDisplayed(BoardsPage.btnListAddCard[0]);
  const numberOfLists = await BoardsPage.btnListAddCard.length;
  await browser.pause(500);
  await waitAndClick(BoardsPage.btnListAddCard[numberOfLists - 1]);
});

When("the user gives a name to the card", async () => {
  await waitUntilElemDisplayed(BoardsPage.txtCardTextArea);
  await BoardsPage.txtCardTextArea.setValue(CARD_NAME);
});

When("the user clicks on the Add card button", async () => {
  await waitAndClick(BoardsPage.btnAddCard);
});

Then("the new card is created", async () => {
  const isCreated = await BoardsPage.isNewListCardCreated(CARD_NAME);
  return await expect(isCreated).toBe(true);
});
