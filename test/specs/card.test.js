const {expect} = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const BoardsPage = require('../pageobjects/boards.page');
const WorkspacePage = require('../pageobjects/workspace.page');
const {waitUntilPageLoads} = require('../utils/waiters');
const {
  USER_EMAIL,
  USER_PW,
  PAGE_URL,
  LIST_NAME,
  CARD_NAME,
} = require('../utils/config');

describe('Verifying the creation of a list item and a card', () => {
  beforeEach(async function() {
    await browser.maximizeWindow();
    await LoginPage.open();
    await LoginPage.login(USER_EMAIL, USER_PW);
    await waitUntilPageLoads();

    await expect(browser).toHaveUrlContaining(PAGE_URL);
    await WorkspacePage.openFirstBoard();
    await waitUntilPageLoads();
  });

  afterEach(async function() {
    await browser.reloadSession();
  });

  it('should create a list item', async () => {
    await BoardsPage.createNewListItem(LIST_NAME);
    const isCreated = await BoardsPage.isNewListCreated(LIST_NAME);
    return await expect(isCreated).toBe(true);
  });

  it('should add a card to the latest list item', async () => {
    const numberOfList = await BoardsPage.countLists();
    await expect(numberOfList).toBeGreaterThanOrEqual(1);
    
    await BoardsPage.createCard(CARD_NAME);

    const isCreated = await BoardsPage.isNewListCardCreated(CARD_NAME);
    return await expect(isCreated).toBe(true);
  });
});
