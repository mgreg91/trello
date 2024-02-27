const {expect} = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const WorkspacePage = require('../pageobjects/workspace.page');
const {waitUntilPageLoads} = require('../utils/waiters');
const {USER_EMAIL, USER_PW, HOMEPAGE_URL} = require('../utils/config');

describe('Verify the logging out function', () => {
  beforeEach(async function() {
    await LoginPage.open();
    await LoginPage.login(USER_EMAIL, USER_PW);
    await waitUntilPageLoads();
  });

  it('should log out', async () => {
    await WorkspacePage.logout();
    await waitUntilPageLoads();
    await expect(browser).toHaveUrlContaining(HOMEPAGE_URL);
  });
});
