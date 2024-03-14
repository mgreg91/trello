const { waitUntilElemDisplayed, waitAndClick } = require("../utils/waiters");

class SearchPage {
  get inputSearchBar() {
    return $("input[data-testid=\"advanced-search-input\"]");
  }

  get searchCardResult() {
    return $("a[data-testid=\"advanced-search-card-result-item\"]");
  }

  get searchBoardResult() {
    return $("a[data-testid=\"advanced-search-board-result-item\"]");
  }

  async startSearch(name) {
    await this.inputSearchBar.setValue(name);
  }

  async getSearchResultTitle() {
    await await waitUntilElemDisplayed(this.searchCardResult);
    const searchresultTitle = await this.searchCardResult.getAttribute("title");
    return searchresultTitle;
  }

  async loadBoardPage() {
    await waitAndClick(this.searchBoardResult);
  }
}
module.exports = new SearchPage();
