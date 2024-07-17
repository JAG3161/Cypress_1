/// <reference types="cypress" />

describe('Primer test con Cypress', () => {
    it("Esto es un hello world desde Cypress", () => {
        cy.log("You're Welcome to Cypress");
        cy.visit("https://testingqarvn.com.es/datos-personales/");
        
        cy.get("#wsf-1-field-21").type("Jorge");
        cy.wait(1000);
        cy.get("#wsf-1-field-22").type("AG");
        cy.wait(1000);
        cy.get("#wsf-1-field-23").type("prueba@prueba.es");
        cy.wait(1000);
        cy.get("#wsf-1-field-24").type(666666669);
        cy.wait(1000);
        cy.get("#wsf-1-field-28").type("Texto dirección prueba");
        cy.wait(1000);
        cy.get("#wsf-1-field-27").click();
        cy.wait(3000);

    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Prueba_Cypress_Studio', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://testingqarvn.com.es/radio-buttons/');
        cy.get('#wsf-1-field-40').clear('654');
        cy.get('#wsf-1-field-40').type('654654654');
        cy.get('#wsf-1-field-41').click();
        cy.get('#wsf-1-label-42-row-1').click();
        cy.get('#wsf-1-field-42-row-1').check();
        cy.get('#wsf-1-label-44-row-2').click();
        cy.get('#wsf-1-field-44-row-2').check();
        cy.get('#wsf-1-label-44-row-1').click();
        cy.get('#wsf-1-field-44-row-1').check();
        cy.get('#wsf-1-label-42-row-2').click();
        cy.get('#wsf-1-field-42-row-2').check();
        cy.get('#wsf-1-label-42-row-3').click();
        cy.get('#wsf-1-field-42-row-3').check();
        cy.get('#wsf-1-field-43').click();
        /* ==== End Cypress Studio ==== */
    });
});