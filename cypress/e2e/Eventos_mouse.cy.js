/// <reference types="Cypress" />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop');

describe("Eventos mouse", ()=>{
    it("Drag and Drop", ()=>{
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
        cy.title().should("eq","The Internet");

        // mover un elemento simulando un raton
        cy.get("#column-a").drag("#column-b",{force:true});

    });

    it("Mouse over", ()=>{
        cy.visit("https://testingqarvn.com.es/upload-files/");
        cy.title().should("eq","Upload Files | TestingQaRvn");

        // posicionar el mouse sobre un menu y seleccionar una opción
        cy.contains("Prácticas QA").trigger("mouseover");
        cy.wait(2000)
        cy.contains("Radio Buttons").invoke("attr","target","_blank").click();  // se puede utilizar invoke con 'removeAttr' para eliminar ese atributo

    });

    it.only("Slider", ()=>{
        cy.visit("https://demos.jquerymobile.com/1.4.2/rangeslider/");
        cy.title().should("eq","Rangeslider - jQuery Mobile Demos");

        // cambiar el % del valor en un slider
        cy.get(':nth-child(17) > form > .ui-rangeslider > .ui-rangeslider-sliders > :nth-child(2)').invoke("attr","aria-valuenow","10");
        
    });
});
