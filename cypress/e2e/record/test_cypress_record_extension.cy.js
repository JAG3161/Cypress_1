/// <reference types="cypress" />

//import 'cypress-file-upload';
require('cypress-plugin-tab');
require('cypress-xpath');
//require('@4tw/cypress-drag-drop');


describe('Cypress Record', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Prueba de Cypress Record Extension', function() {
   
       cy.viewport(1920, 911)
    
       cy.visit('https://demoqa.com/text-box')
    
       cy.get('.text-field-container > #userForm > #userName-wrapper > .col-md-9 > #userName').click()
    
       cy.get('.text-field-container > #userForm > #userName-wrapper > .col-md-9 > #userName').type('JOR')
    
       cy.get('.text-field-container > #userForm > #userEmail-wrapper > .col-md-9 > #userEmail').click()
    
       cy.get('.text-field-container > #userForm > #userEmail-wrapper > .col-md-9 > #userEmail').type('JORE@PRUEBA.COM')
    
       cy.get('.text-field-container > #userForm > #currentAddress-wrapper > .col-md-9 > #currentAddress').click()
    
       cy.get('.text-field-container > #userForm > .mt-2 > .text-right > #submit').click()
    
       cy.get('.element-group > .show > .menu-list > #item-1 > .text').click()
    
       cy.get('.rct-node > .rct-text > label > .rct-checkbox > .rct-icon').click()
    
       cy.get('ol > .rct-node > .rct-text > label > #tree-node-home').check({force:true})
    
       cy.get('.element-group > .show > .menu-list > #item-2 > .text').click()
    
       cy.get('.row > .col-12 > div > .custom-control:nth-child(2) > .custom-control-label').click()
    
       cy.get('.row > .col-12 > div > .custom-control > #yesRadio').type('on')
    
       cy.get('.element-group > .show > .menu-list > #item-4 > .text').click()
    
       cy.get('.row > .col-12 > div > div > #doubleClickBtn').click()
    
       cy.get('.row > .col-12 > div > div > #doubleClickBtn').click()
    
    })
   
   })
   