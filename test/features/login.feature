@login
Feature: Logging in to Trello
  As a user
  I want to be able to log into the Trello website
  So that I can start using Trello's project management features

  Scenario: Unsuccessful login to Trello because of incorrect password
    Given the user is on the Trello login page
    When the user provides their e-mail address
    And the user clicks on the Continue button
    And the user provides an incorrect password
    And the user clicks on the Login button
    Then the page should show an incorrect password error message

  Scenario: Successful login to Trello
    Given the user is on the Trello login page
    When the user provides their e-mail address
    And the user clicks on the Continue button
    And the user provides their password
    And the user clicks on the Login button
    Then the user should be redirected to their Trello board page