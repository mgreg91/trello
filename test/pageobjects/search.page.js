const { waitUntilElemDisplayed } = require("../utils/waiters");
const SearchComponent = require("./components/search.component");

class SearchPage {
  async startSearch(name) {
    await SearchComponent.inputSearchBar.setValue(name);
  }

  async getSearchResultTitle() {
    await waitUntilElemDisplayed(SearchComponent.searchCardResult);
    const searchresultTitle =
      await SearchComponent.searchCardResult.getAttribute("title");
    return searchresultTitle;
  }

  async loadBoardPage() {
    await waitUntilElemDisplayed(SearchComponent.searchBoardResult);
    (await SearchComponent.searchBoardResult).click();
  }
}
module.exports = new SearchPage();
