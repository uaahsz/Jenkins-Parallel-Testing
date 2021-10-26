///<reference types="cypress" />
 
describe('Custom Suite', function(){
  
    it('Login Test', function(){
      cy.login('admin@yourstore.com','admin')
      cy.title().should('be.equal','Dashboard / nopCommerce administration')

      cy.login('admin@yourstore.com123','admin')
      cy.title().should('not.be.equal','Dashboard / nopCommerce administration')
    })

    it('Add Customer', function(){
        cy.visit('https://admin-demo.nopcommerce.com/login') 
        cy.get('#Email').clear()
        cy.get('#Password').clear()
  
        cy.get('#Email').type("admin@yourstore.com")
        cy.get('#Password').type("admin")
        cy.get('.button-1').click()
        cy.log("*********Adding Customer")
      })

      it('Edit Customer', function(){
        cy.visit('https://admin-demo.nopcommerce.com/login') 
        cy.get('#Email').clear()
        cy.get('#Password').clear()
  
        cy.get('#Email').type("admin@yourstore.com")
        cy.get('#Password').type("admin")
        cy.get('.button-1').click()
        cy.log("*********Editing Customer")
      })
      
  })
  