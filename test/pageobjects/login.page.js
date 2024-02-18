const { $ } = require("@wdio/globals");
const Page = require("./page");
const { PAGE_URL } = require("../utils/config");
const { waitUntilPageLoads } = require("../utils/waiters");

class LoginPage extends Page {
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
    return super.open("login");
  }
}

module.exports = new LoginPage();
