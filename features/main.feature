Feature: mytoyota-cafe-test

  I want to find TestCafe repository by Google search

  Scenario: login page works fine
    Given I navigate to mytoyota page
    Then I can see email field


  Scenario: login page has next button
    Given I navigate to mytoyota page
    Then I can see next button