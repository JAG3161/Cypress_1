/// <reference types="Cypress" />

require("cypress-plugin-tab");
require("cypress-xpath");

describe("Referencias a la ventana", ()=>{
    it("Window: propiedad charset", ()=>{
        cy.visit("https://testsheepnz.github.io/random-number.html");
        //valida que el título de la página es igual al indicado
        cy.title().should("eq","The Number Game");

        // se valida que el documento incluye la propiedad charset con valor UTF-8
        cy.document().should("have.property","charset").and("eq","UTF-8");
    });

    it.only("Window: url", ()=>{
        cy.visit("https://testsheepnz.github.io/random-number.html");        
        cy.title().should("eq","The Number Game");

        // se valida que la pagina actual tiene la url o parte de la url indicada
        cy.url().should("include","random-number.html");
        cy.url().should("eq","https://testsheepnz.github.io/random-number.html");
    });
});