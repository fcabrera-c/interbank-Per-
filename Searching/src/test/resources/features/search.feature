# language: en
# ------------------------------------------------------------------------------
Feature: Search results in the home page

  Scenario: Search something in the platform
    Given I'm at home page
    And I select the searching option
    When I search something
    Then I see the results
