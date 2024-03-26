@create_card
Feature: Creating new list items with cards
  As a user
  I want to create a new list item
  So that I can add new cards to it

  Scenario Outline:
    Given the user is logged in
    And the user has a board
    And the user has opened that board
    When the user clicks on the Add new list button
    And the user types in "<listname>" for the list
    And the user clicks on the Add list button
    Then the new list is created

    Examples: 
    | listname |
    | This is a list |

  Scenario Outline:
    Given the user is on the board page
    And the user has at least one list item
    When the user clicks on the Add a card button
    And the user gives a "<cardname>" to the card
    And the user clicks on the Add card button
    Then the new card is created

    Examples: 
    | cardname |
    | Well this must be a card |