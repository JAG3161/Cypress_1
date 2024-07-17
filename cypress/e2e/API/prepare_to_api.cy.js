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
   
       const data={
        "name": "jag",
        "surname": "asdf",
        "age": 12,
        "elementos": [
            {"name":"e1", "description":"this is the item one"},
            {"name":"e2", "description":"this is the item two"},
            {"name":"e3", "description":"this is the item three"}
        ]
       }
       
       cy.log(data["name"], data.surname, data.elementos[2].name)
    
    })
   
})