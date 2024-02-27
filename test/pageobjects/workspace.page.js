const {waitUntilElemDisplayed, waitAndClick} = require('../utils/waiters');

class WorkspacePage {
  get boardsTile() {
    return $('div[class="board-tile mod-add"]');
  }

  get boardsTab() {
    return $('a[data-testid="home-team-boards-tab"]');
  }

  get boardsSectionList() {
    return $('ul[class="boards-page-board-section-list"]');
  }

  get btnCreate() {
    return $('button[data-testid="header-create-menu-button"]');
  }

  get btnCreateBoard() {
    return $('button[data-testid="header-create-board-button"]');
  }

  get txtCreateBoardTitle() {
    return $('input[data-testid="create-board-title-input"]');
  }

  get btnCreateBoardSubmit() {
    return $('button[data-testid="create-board-submit-button"]');
  }

  get iconProfileMenuAvater() {
    return $('div[data-testid="header-member-menu-avatar"]');
  }

  get btnLogout() {
    return $('button[data-testid="account-menu-logout"]');
  }

  get submitLogout() {
    return $('button[data-testid="logout-button"]');
  }

  async createBoard(boardName) {
    await waitUntilElemDisplayed(this.boardsTile);
    await waitAndClick(this.btnCreate);
    await waitAndClick(this.btnCreateBoard);
    await this.txtCreateBoardTitle.setValue(boardName);
    await waitAndClick(this.btnCreateBoardSubmit);
  }

  async countBoards() {
    await this.boardsTab.click();
    await waitUntilElemDisplayed(this.boardsSectionList);
    const boardsArray = await this.boardsSectionList.$$('li');
    const boardsArrayLength = await boardsArray.length;
    return boardsArrayLength;
  }

  async openFirstBoard() {
    await waitUntilElemDisplayed(this.boardsSectionList);
    return await this.boardsSectionList.$$('li')[0].click();
  }

  async logout() {
    await waitAndClick(this.iconProfileMenuAvater);
    await waitAndClick(this.btnLogout);
    await waitAndClick(this.submitLogout);
  }
}
module.exports = new WorkspacePage();
