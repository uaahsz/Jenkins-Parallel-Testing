///<reference types="cypress" />

describe('HRIS Organogram Test', function(){
    it('Organogram Positive', function(){
        cy.HRIS_Login('anwarh','kk') //Used custom command HRIS_Login to Login
        cy.get('.profile-text').click()
        cy.get('.mat-menu-content > :nth-child(1) > span').click()
        cy.get('#Departments').select('Enabling Applications').should('have.value','Enabling Applications')
        cy.get('#Teams').select('NIP').should('have.value','NIP')
        cy.get('#Levels').select('6').should('have.value','6')
        cy.get('.btn').should('be.enabled').should('be.visible').click()
        cy.get('[style="position:absolute;right:30px;top:30px; width:40px;height:50px;cursor:pointer;"]').click()
        cy.get('.chart-menu > div > span').click()
        cy.pause()
      })

      it('Organogram Positive 2', function(){
        cy.HRIS_Login('anwarh','kk') //Used custom command HRIS_Login to Login
        cy.get('.profile-text').click()
        cy.get('.mat-menu-content > :nth-child(1) > span').click()
        cy.get('#Departments').select('Human Capital Division').should('have.value','Human Capital Division')
        cy.get('#Teams').select('BAG').should('have.value','BAG')
        cy.get('#Levels').select('1').should('have.value','1')
        cy.get('.btn').should('be.enabled').should('be.visible').click()
      })
})