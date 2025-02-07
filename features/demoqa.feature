Feature: DemoQA Form Page
  Scenario: Check the title of the DemoQA form page
    Given I navigate to the DemoQA form page
    Then the page title should contain "DEMOQA"