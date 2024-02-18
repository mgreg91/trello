const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const {
  PAGE_URL,
  USER_EMAIL,
  USER_PW,
  LOGIN_ERROR_MSG,
} = require("../utils/config");

describe("Verify logging in to Trello with negative and positive cases", () => {
  it("should not log in with valid email and invalid password", async () => {
    await LoginPage.open();
    await LoginPage.login(USER_EMAIL, "obviouslyWrongP@$$word");

    await expect(LoginPage.passwordErrorMsg).toBeDisplayed();
    await expect(LoginPage.passwordErrorMsg).toHaveTextContaining(
      LOGIN_ERROR_MSG
    );
  });

  it("should log in with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login(USER_EMAIL, USER_PW);
    await expect(browser).toHaveUrlContaining(PAGE_URL);
  });
});
