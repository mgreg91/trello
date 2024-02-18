const BoardsComponent = require("./components/boards.component");
const NavibarComponent = require("./components/navibar.component");
const {
  waitUntilElemDisplayed,
  waitUntilPageLoads,
} = require("../utils/waiters");

class BoardsPage {
  async getBoardsHeaderText() {
    await waitUntilElemDisplayed(BoardsComponent.boardsHeader);
    const headerText = (await BoardsComponent.boardsHeader).getText();
    return headerText;
  }

  async createNewListItem(listname) {
    await waitUntilElemDisplayed(BoardsComponent.newListButton);
    await BoardsComponent.newListButton.click();
    const numberOfLists = await BoardsComponent.textAreaForList.length;
    await BoardsComponent.textAreaForList[numberOfLists - 1].setValue(listname);
    await waitUntilElemDisplayed(BoardsComponent.btnAddList);
    await BoardsComponent.btnAddList.click();
  }

  async isNewListCreated(listname) {
    await waitUntilElemDisplayed(BoardsComponent.listWrapper);
    const numberOfLabels = await BoardsComponent.labelTextName.length;
    const labelName = await BoardsComponent.labelTextName[
      numberOfLabels - 1
    ].getText();
    return labelName === listname;
  }

  async countLists() {
    return await BoardsComponent.listItems.length;
  }

  async createCard(cardname) {
    await waitUntilElemDisplayed(BoardsComponent.btnListAddCard[0]);
    const numberOfLists = await BoardsComponent.btnListAddCard.length;
    await BoardsComponent.btnListAddCard[numberOfLists - 1].click();

    await waitUntilElemDisplayed(BoardsComponent.txtCardTextArea);
    await BoardsComponent.txtCardTextArea.setValue(cardname);

    await waitUntilElemDisplayed(BoardsComponent.btnAddCard);
    await BoardsComponent.btnAddCard.click();
  }

  async isNewListCardCreated(cardname) {
    await waitUntilElemDisplayed(BoardsComponent.listCardName);
    const cardElementName = (await BoardsComponent.listCardName).getText();
    return (await cardElementName) === cardname;
  }
}
module.exports = new BoardsPage();
