import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

When("I should see a search bar", () => {
  cy.get("#searchbox_input").should("have.attr","placeholder","Search without being tracked");
});

Then("I type a {word} into the search bar", (name) => {
  cy.get("#searchbox_input").type(name).type("{enter}");
});