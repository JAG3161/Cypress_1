/// <reference types="Cypress" />

require("cypress-plugin-tab");
require("cypress-xpath");

describe("Reto de Select - Dual List", () => {
    it("Add", () => {
        cy.visit("https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/");
        cy.title().should("eq","jQuery Dual List Box Demo");

        cy.get(".unselected").select(["Abigail Barber","Aimee Norman"]).then(() => {
            cy.get('.str').should("be.enabled").click().then(() => {
                cy.wait(1000);
                cy.get('.atr').should("be.enabled").click().then(()=>{
                    cy.wait(1000);
                    cy.get('.atl').should("be.enabled").click().then(()=>{
                        cy.log("Se movieron todos los elementos");
                    });
                });
            });

        });
        

    });
});