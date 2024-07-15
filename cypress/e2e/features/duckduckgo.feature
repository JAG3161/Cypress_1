# cypress/e2e/duckduckgo.feature
Feature: Acceso duckduckgo.com
  Prueba automatizada con cucumber
  Scenario: visiting the frontpage
    Given I visit duckduckgo.com
    When I should see a search bar
    Then I type a RICK into the search bar

  Scenario Outline: Scenario Outline name: visiting the frontpage
    Given I visit duckduckgo.com
    When I should see a search bar
    Then I type a <name> into the search bar

    Examples:
        | name | 
        | jorge | 
        | gema |
        | elena |
        | richi |
        | pimentel |
