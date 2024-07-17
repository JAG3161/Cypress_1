/// <reference types="cypress" />

//import 'cypress-file-upload';
require('cypress-plugin-tab');
require('cypress-xpath');
//require('@4tw/cypress-drag-drop');

describe('Primer test con Cypress', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it("Test Cypress Studio", () => {
        cy.log("You're Welcome to Cypress");
        cy.visit("https://demoqa.com/text-box");

        cy.get("#userName").type("Jorge");
        cy.wait(1000);
        cy.get("#userEmail").type("asd@example.com");
        cy.wait(1000);


        /* ==== Generated with Cypress Studio ==== */
        cy.get('#permanentAddress').click();
        cy.get('#currentAddress').click();
        cy.get('#permanentAddress').click();
        cy.get('#currentAddress').click();
        cy.get('#userEmail').clear('asd@exampl.com');
        cy.get('#userEmail').type('asd@prueba.com');
        cy.get('#userName').clear('Jorge ');
        cy.get('#userName').type('Jorge AG');
        cy.get('#permanentAddress').click();
        cy.get('#submit').click();
        /* ==== End Cypress Studio ==== */
    });


    /* ==== Test Created with Cypress Studio ==== */
    it('Test_Checkbox', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://demoqa.com/webtables');
        cy.get('#searchBox').clear('k');
        cy.get('#searchBox').type('k');
        cy.get('#edit-record-3 > svg').click();
        cy.get('#age-wrapper > .col-md-2').click();
        cy.get('#age').clear();
        cy.get('#age').type('43');
        cy.get('#submit').click();
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').clear('J');
        cy.get('#firstName').type('JAGGER');
        cy.get('#lastName').clear('A');
        cy.get('#lastName').type('AP');
        cy.get('#userEmail').clear('P');
        cy.get('#userEmail').type('PRUEBA@PRUEBA.ES');
        cy.get('#department').clear('U');
        cy.get('#department').type('UPPPS');
        cy.get('#submit').click();
        cy.get('#age').clear('5');
        cy.get('#age').type('55');
        cy.get('#salary').clear('8');
        cy.get('#salary').type('80000');
        cy.get('#submit').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#searchBox').clear('j');
        cy.get('#searchBox').type('j');
        cy.get('#edit-record-4 > svg').click();
        cy.get('#lastName').clear('A');
        cy.get('#lastName').type('PLAX');
        cy.get('#submit').click();
        /* ==== End Cypress Studio ==== */
    });
});