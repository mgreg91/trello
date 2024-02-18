class NavibarComponent {
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
}

module.exports = new NavibarComponent();
