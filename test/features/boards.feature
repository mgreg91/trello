#Example of creating a board
@create_boards
Feature: Creating a new board
  As a user
  I want to create a new board
  So that I can use it

  Scenario: Creating a new board
    Given the user is logged in on the Trello Dashboard page
    When the user clicks on the Create button in the main menu
    And the user clicks on the Create new board button
    And the user provides "My very first board" as a board name
    And the user clicks on the Create button inside the form 
    Then the new board is created
    And the user is redirected to the newly created board page