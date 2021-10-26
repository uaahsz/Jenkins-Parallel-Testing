///<reference types="cypress" />
 
describe('Fixtures Demo Suite', function(){
  
    before(function(){
    cy.fixture('example').then(function(data){
        this.data=data
    })
    })
    it('Fixtures', function(){
      cy.visit('https://admin-demo.nopcommerce.com/login') 
      cy.get('#Email').clear()
      cy.get('#Password').clear()
      
      cy.get('#Email').type(this.data.email)
      cy.get('#Password').type(this.data.password)
      cy.get('.button-1').click()
    })
  })
  
    