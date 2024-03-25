@search_card_board
Feature: Searching for cards and boards
  As a user
  I want to be able to use the search function
  So that I could open the search results

  Scenario:
    Given the user is loggedin
    And the user is at the search page
    When the user enters a card name into the search bar
    Then the search result is displayed containing the card

  Scenario:
    Given the user is currently at the search page
    And the user entered a board name into the search bar
    When the user clicks on board search result
    Then the user is redirected to that board