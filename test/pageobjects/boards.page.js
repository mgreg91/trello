const {waitUntilElemDisplayed, waitAndClick} = require('../utils/waiters');

class BoardsPage {
  get boardsHeader() {
    return $('h1[data-testid="board-name-display"]');
  }

  get newListButton() {
    return $('button[data-testid="list-composer-button"]');
  }

  get textAreaForList() {
    return $$('textarea[data-testid="list-name-textarea"]');
  }

  get btnAddList() {
    return $('button[data-testid="list-composer-add-list-button"]');
  }

  get listWrapper() {
    return $('li[data-testid="list-wrapper"]');
  }

  get labelTextName() {
    return $$('h2[data-testid="list-name"]');
  }

  get listItems() {
    return $('#board').$$('li');
  }

  get btnListAddCard() {
    return $$('button[data-testid="list-add-card-button"]');
  }

  get txtCardTextArea() {
    return $('textarea[data-testid="list-card-composer-textarea"]');
  }

  get btnAddCard() {
    return $('button[data-testid="list-card-composer-add-card-button"]');
  }

  get listCardName() {
    return $('a[data-testid="card-name"]');
  }
  async getBoardsHeaderText() {
    await waitUntilElemDisplayed(this.boardsHeader);
    const headerText = (await this.boardsHeader).getText();
    return headerText;
  }

  async createNewListItem(listname) {
    await waitAndClick(this.newListButton);
    const numberOfLists = await this.textAreaForList.length;
    await this.textAreaForList[numberOfLists - 1].setValue(listname);
    await waitAndClick(this.btnAddList);
  }

  async isNewListCreated(listname) {
    await waitUntilElemDisplayed(this.listWrapper);
    const numberOfLabels = await this.labelTextName.length;
    const labelName = await this.labelTextName[numberOfLabels - 1].getText();
    return labelName === listname;
  }

  async countLists() {
    return await this.listItems.length;
  }

  async createCard(cardname) {
    await waitUntilElemDisplayed(this.btnListAddCard[0]);
    const numberOfLists = await this.btnListAddCard.length;
    await this.btnListAddCard[numberOfLists - 1].click();

    await waitUntilElemDisplayed(this.txtCardTextArea);
    await this.txtCardTextArea.setValue(cardname);

    await waitAndClick(this.btnAddCard);
  }

  async isNewListCardCreated(cardname) {
    await waitUntilElemDisplayed(this.listCardName);
    const cardElementName = (await this.listCardName).getText();
    return (await cardElementName) === cardname;
  }
}
module.exports = new BoardsPage();
