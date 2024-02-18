class WorkspaceComponent {
  get boardsTile() {
    return $('div[class="board-tile mod-add"]');
  }

  get boardsTab() {
    return $('a[data-testid="home-team-boards-tab"]');
  }

  get boardsSectionList() {
    return $('ul[class="boards-page-board-section-list"]');
  }
}

module.exports = new WorkspaceComponent();
