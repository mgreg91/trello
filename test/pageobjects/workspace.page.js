const NavibarComponent = require("./components/navibar.component");
const WorkspaceComponent = require("./components/workspace.component");
const { waitUntilElemDisplayed, waitAndClick } = require("../utils/waiters");

class WorkspacePage {
  async createBoard(boardName) {
    await waitUntilElemDisplayed(WorkspaceComponent.boardsTile);
    await waitAndClick(NavibarComponent.btnCreate);
    await waitAndClick(NavibarComponent.btnCreateBoard);
    await NavibarComponent.txtCreateBoardTitle.setValue(boardName);
    await waitAndClick(NavibarComponent.btnCreateBoardSubmit);
  }

  async countBoards() {
    await WorkspaceComponent.boardsTab.click();
    await waitUntilElemDisplayed(WorkspaceComponent.boardsSectionList);
    const boardsArray = await WorkspaceComponent.boardsSectionList.$$("li");
    const boardsArrayLength = await boardsArray.length;
    return boardsArrayLength;
  }

  async openFirstBoard() {
    await waitUntilElemDisplayed(WorkspaceComponent.boardsSectionList);
    return await WorkspaceComponent.boardsSectionList.$$("li")[0].click();
  }

  async logout() {
    await waitUntilElemDisplayed(NavibarComponent.iconProfileMenuAvater);
    await NavibarComponent.iconProfileMenuAvater.click();
    await waitUntilElemDisplayed(NavibarComponent.btnLogout);
    await NavibarComponent.btnLogout.click();
    await waitUntilElemDisplayed(NavibarComponent.submitLogout);
    await NavibarComponent.submitLogout.click();
  }
}
module.exports = new WorkspacePage();
