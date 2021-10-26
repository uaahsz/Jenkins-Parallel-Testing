///<reference types="cypress" />
 
describe('MyTestSuite', function(){
  
  it('My First Test Case', function(){
    cy.visit('https://demo.nopcommerce.com/') 
    cy.title().should('eq', 'nopCommerce demo store')
  })
})

  