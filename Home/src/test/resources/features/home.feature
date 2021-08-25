# language: en
# ------------------------------------------------------------------------------
Feature: Navigate on the Home page

  Scenario: Validate Home page
    Given we access on the home page
    And we validate all sections of the page
    Then we validate the Footer section
