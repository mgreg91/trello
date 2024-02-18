class BoardsComponent {
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
    return $("#board").$$("li");
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
}

module.exports = new BoardsComponent();
