/// <reference types='Cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab');
require('cypress-xpath');
require('@4tw/cypress-drag-drop');


describe('Reto Hooks',()=>{
    let time=1000;
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title().should('eq','OrangeHRM');
        cy.wait(time);
        //Login
        cy.get('[placeholder="Username"]').should('be.visible').type('Admin');
        cy.wait(time);
        cy.get('[placeholder="Password"]').should('be.visible').type('admin123');
        cy.wait(time);
        cy.get('[type="submit"]').should('be.visible').click({force: true});
        cy.wait(time);
    });
    
    it('test 2',()=>{
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a/span').click({force: true});
        cy.wait(time);
    });

    it('test 1',()=>{
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/i').should('be.visible').click({force: true});
        cy.wait(time);
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/ul/li[4]/a').should('be.visible').click({force: true});
        cy.wait(time);
    });
});