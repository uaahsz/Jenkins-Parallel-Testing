///<reference types="cypress" />

describe('HRIS Login Test', function(){
  
    it('Login Positive', function(){
      cy.visit('http://10.32.177.87/#/login')
      cy.title().should('eq', 'HRIS')
      cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper').should('be.visible').type("anwarh")
      cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper').should('be.visible').type("kk")
      cy.get('.mat-select-arrow').click()
      cy.get('#mat-option-0 > .mat-option-text').click()
      cy.get('.mat-raised-button').click()
      cy.pause()
    })

    it('Login Negative 1', function(){
      cy.visit('http://10.32.177.87/#/login')
      cy.title().should('eq', 'HRIS')
      cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper').should('be.visible').type("netsol")
      cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper').should('be.visible').type("kk")
      cy.get('.mat-select-arrow').click()
      cy.get('#mat-option-0 > .mat-option-text').click()
      cy.get('.mat-raised-button').click()
      cy.title().should('eq', 'HRIS')
      cy.pause()
    })

    it('Login Negative 2', function(){
      cy.visit('http://10.32.177.87/#/login')
      cy.title().should('eq', 'HRIS')
      cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper').should('be.visible').type("anwarh")
      cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper').should('be.visible').type("kk")
      cy.get('.mat-select-arrow').click()
      cy.get('#mat-option-1 > .mat-option-text').click()
      cy.get('.mat-raised-button').click()
      cy.title().should('eq', 'HRIS')
    })
  })