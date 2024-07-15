// ADVERTENCIA: LA PÁGINA DE PRUEBAS UTILIZADA, ACTUALMENTE, NO OPERA CORRECTAMENTE CON CYPRESS

/// <reference types="Cypress" />

require("cypress-plugin-tab");
require("cypress-xpath");

describe('Test número 9', () => {
    it("Segundo reto: probar la aplicación", () => {        
        cy.visit("https://computer-database.gatling.io/computers");
        cy.title().should("eq","Computers database");
        cy.wait(1000);

        // Buscar elemento
        cy.get("#searchbox").type("ACE");        
        cy.get('#searchsubmit').click();

        // Añadir nuevo elemento
        cy.get('#add').should("be.visible").click();
        cy.wait(1000);
        cy.get('#name').should("be.visible").type("{pageup}");
        cy.get('#name').type("test_computer");
        cy.get('#introduced').type("1981-02-08");
        cy.get('#discontinued').should("be.visible").type("1982-02-08");
        cy.get('#company').should("be.visible").select("IBM").should("have.value",13);
        cy.get('.primary').should("be.visible").click();

         // Buscar elemento creado
         cy.get("#searchbox").type("test_computer");        
         cy.get('#searchsubmit').click();

    });
});

