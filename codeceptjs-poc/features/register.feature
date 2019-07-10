@Register
Feature: Register to the application

  Background:
    Given I am on the home page

  Scenario: I am able to register in the application
    Given I am on the registration page
    When I fill in all details on the page
    And I click submit
    #Then I can see my correct username on the page
