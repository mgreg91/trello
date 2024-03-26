const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");
const { waitUntilPageLoads, waitAndClick } = require("../../utils/waiters");
const { USER_EMAIL, USER_PW, HOMEPAGE_URL } = require("../../utils/config");
const LoginPage = require("../../pageobjects/login.page");
const WorkspacePage = require("../../pageobjects/workspace.page");

Given("the user is logged in on Trello", async () => {
  await LoginPage.open();
  await LoginPage.login(USER_EMAIL, USER_PW);
  await waitUntilPageLoads();
});

When("the user clicks on their profile menu icon", async () => {
  await waitAndClick(WorkspacePage.iconProfileMenuAvater);
});

When("the user clicks on the Logout button", async () => {
  await waitAndClick(WorkspacePage.btnLogout);
});

When("the user clicks on the Submit button", async () => {
  await waitAndClick(WorkspacePage.submitLogout);
});

Then("the user should be logged out", async () => {
  await waitUntilPageLoads();
});

Then("the user should be redirected to the Trello homepage", async () => {
  await expect(browser).toHaveUrlContaining(HOMEPAGE_URL);
});
