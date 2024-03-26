const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");
const { waitUntilPageLoads } = require("../../utils/waiters");
const { PAGE_URL, USER_EMAIL, USER_PW, LOGIN_ERROR_MSG } = require("../../utils/config");
const LoginPage = require("../../pageobjects/login.page");

Given("the user is on the Trello login page", async () => {
  await LoginPage.open();
});

When("the user provides their e-mail address", async () => {
  await LoginPage.inputUserEmail.setValue(USER_EMAIL);
});

When("the user clicks on the Continue button", async () => {
  await LoginPage.btnLogin.click();
  await waitUntilPageLoads();
});

When("the user provides an incorrect password", async () => {
  await LoginPage.inputPassword.waitForDisplayed();
  await LoginPage.inputPassword.setValue("obviouslyWrongP@$$word");
});

When("the user clicks on the Login button", async () => {
  await LoginPage.btnLoginSubmit.click();
});

Then("the page should show an incorrect password error message", async () => {
  await expect(LoginPage.passwordErrorMsg).toBeDisplayed();
  await expect(LoginPage.passwordErrorMsg).toHaveTextContaining(LOGIN_ERROR_MSG);
});

When("the user provides their password", async () => {
  await LoginPage.inputPassword.waitForDisplayed();
  await LoginPage.inputPassword.setValue(USER_PW);
});

Then("the user should be redirected to their Trello board page", async () => {
  await expect(browser).toHaveUrlContaining(PAGE_URL);
});
