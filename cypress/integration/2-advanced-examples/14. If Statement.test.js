/// <reference types="cypress" />
describe('Tables Test Suite', function(){
    
    it('Tables', function(){
        cy.visit('http://testautomationpractice.blogspot.com/')
        if(cy.get('#HTML1').contains('Learn Selenium'))
        {
            cy.log('Success')
            cy.log('Good')
        }

        // cy.visit('https://demo.nopcommerce.com/')

        // cy.get('body').then((body) => {
        //     if (cy.title().should('eq', 'nopCommerce demo store'))
        //     cy.log('i')
        // })
        // cy.log('Else block got executed')
    })
})