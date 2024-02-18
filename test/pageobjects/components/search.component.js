class SearchComponent {
  get inputSearchBar() {
    return $('input[data-testid="advanced-search-input"]');
  }

  get searchCardResult() {
    return $('a[data-testid="advanced-search-card-result-item"]');
  }

  get searchBoardResult() {
    return $('a[data-testid="advanced-search-board-result-item"]');
  }
}
module.exports = new SearchComponent();
