require('cypress-xpath')
require('cypress-plugin-tab')
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe("Welcome to the Cypress Course 2024 !!", () => {

    it('First Test', () => {
        cy.log('HELLO WORLD!!')
        cy.wait(200)
    });

    it.only('Second Test', ()=> {
        cy.visit("https://demoqa.com/")
        //cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.get('#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body > h5').click()
        cy.get('#item-0').click()
        
        
        cy.fixture("MOCK_DATA").then((arr)=>{
            arr.forEach((item)=>{
                const i_name = item.Name
                const i_mail = item.email
                const i_city = item.City
                const i_country = item.Country

                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                  })
                

                cy.get('#userName').should('be.visible').clear().type(i_name)               
                cy.xpath("//input[contains(@placeholder,'name@example.com')]").should('be.visible').clear().type(i_mail)               
                cy.get("#currentAddress").should('be.visible').clear().type(i_city)               
                cy.xpath("//textarea[contains(@id,'permanentAddress')]").should('be.visible').clear().type(i_country)
                //cy.wait(1000)

            })
        })
        
        
        
        //cy.viewport(1500,1000)
        //const imagen='img1.jpg'
        //cy.get('#element-1').attachFile(imagen)
        //cy.wait(1500)
        //cy.get("#column-a").drag("#column-b",{force:true})
    })

})