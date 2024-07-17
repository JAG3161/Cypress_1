/// <reference types="cypress" />

import 'cypress-file-upload';
require('cypress-plugin-tab');
require('cypress-xpath');
//require('@4tw/cypress-drag-drop');

describe('Cypress Recorder vol 2', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Prueba de Cypress Recorder_2 Extension', function() {
   
       cy.viewport(1920, 911)
    
       cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#firstName').click({force: true});
        cy.get('#firstName').type('jajajajaja');
        cy.get('#lastName').type('hola');
        cy.get('#userEmail').type('hola@prueba.es');
        cy.get('.custom-radio:nth-child(1) > .custom-control-label').click({force: true});
        cy.get('#gender-radio-1').click({force: true});
        cy.get('#userNumber').click({force: true});
        cy.get('#userNumber').type('6546546545');
        cy.get('.subjects-auto-complete__value-container').click({force: true});
        cy.get('#subjectsInput').type('hola');
        cy.get('.custom-checkbox:nth-child(1) > .custom-control-label').click({force: true});
        cy.get('#hobbies-checkbox-1').click({force: true});
        cy.get('.custom-checkbox:nth-child(2) > .custom-control-label').click({force: true});
        cy.get('#hobbies-checkbox-2').click({force: true});
        cy.get('.custom-checkbox:nth-child(3) > .custom-control-label').click({force: true});
        cy.get('#hobbies-checkbox-3').click({force: true});
        cy.get('#uploadPicture').click({force: true});
        cy.get('#uploadPicture').drag('DumpStack.log');
        cy.get('#currentAddress').click({force: true});
        cy.get('#currentAddress').type('pero esto que eeeesssss');
        //cy.xpath('//*[@id="state"]/div/div[2]').select('NCR');
        //cy.get('.css-1gtu0rj-indicatorContainer').click({force: true});
        cy.get('#submit').click({force: true});
        cy.get('#userForm').submit();
        cy.get('#userNumber').click({force: true});
        //cy.get('#userNumber').type('{backspace}');
        cy.get('#userNumber').click({force: true});
        cy.get('#submit').click({force: true});
        cy.get('#userForm').submit({force: true});
        cy.get('#closeLargeModal').click({force: true});

    
    
    })
   
})