const {expect} = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const BoardsPage = require('../pageobjects/boards.page');
const WorkspacePage = require('../pageobjects/workspace.page');
const {waitUntilPageLoads} = require('../utils/waiters');
const {makeTextUrlCompatible} = require('../utils/helper');
const {USER_EMAIL, USER_PW, BOARD_NAME} = require('../utils/config');

describe('Verify the creation of a new board', () => {
  beforeEach(async function() {
    await LoginPage.open();
    await LoginPage.login(USER_EMAIL, USER_PW);
    await waitUntilPageLoads();
  });

  it('should create a new board', async () => {
    await WorkspacePage.createBoard(BOARD_NAME);
    const headerText = await BoardsPage.getBoardsHeaderText();
    await expect(headerText).toBe(BOARD_NAME);
    const boardUrl = await makeTextUrlCompatible(BOARD_NAME);
    await expect(browser).toHaveUrlContaining(boardUrl);
  });
});
