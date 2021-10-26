///<reference types="cypress" />
 
describe('Hooks Demo Test Suite', function(){
    
    before(function(){
        cy.log('***********This is Setup Block*************')
    })

    after(function(){
        cy.log('***********This is Tear Down Block*************')
    })

    beforeEach(function(){
        cy.log('***********This is Login Block*************')
    })

    afterEach(function(){
        cy.log('***********This is Log Out Block*************')
    })

    
    
    it('Searching', function(){
      cy.log('***********This is Searching Test*************') 
      
    })

    it('Advanced Searching', function(){
        cy.log('***********This is Advanced Searching Test*************') 
        
    })

    it('Listing Products', function(){
        cy.log('***********This is Listing Products*************') 
        
    })
  })
  
    