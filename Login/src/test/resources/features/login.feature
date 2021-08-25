Feature: Validate the login page

  Scenario: Validate the login page
    Given we access on the login page
    And we capture all data of the login page fields
    And we capture the second option
    And we capture the thirth option
    When we select the password field
    Then we select the check box Recordar datos
