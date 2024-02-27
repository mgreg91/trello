const { $ } = require("@wdio/globals");
const { waitUntilPageLoads } = require("../utils/waiters");

class LoginPage {
  get inputUserEmail() {
    return $("#user");
  }

  get inputPassword() {
    return $("#password");
  }

  get passwordErrorMsg() {
    return $("[data-testid='form-error']");
  }

  get btnLogin() {
    return $("#login");
  }

  get btnLoginSubmit() {
    return $("#login-submit");
  }

  async login(email, password) {
    await this.inputUserEmail.setValue(email);
    await this.btnLogin.click();
    await waitUntilPageLoads();
    await this.inputPassword.waitForDisplayed();
    await this.inputPassword.setValue(password);
    await this.btnLoginSubmit.click();
  }

  open() {
    return browser.url(`https://trello.com/login`);
  }
}

module.exports = new LoginPage();
