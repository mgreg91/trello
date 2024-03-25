@logout
Feature: Logging out from Trello
  As a user
  I want to be able to log out from my Trello profile

  Scenario: Successful logout from Trello profile
    Given the user is logged in on Trello
    When the user clicks on their profile menu icon
    And the user clicks on the Logout button
    And the user clicks on the Submit button
    Then the user should be logged out
    And the user should be redirected to the Trello homepage