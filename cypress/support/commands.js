// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://admin-demo.nopcommerce.com/login') 
    cy.get('#Email').clear()
    cy.get('#Password').clear()

    cy.get('#Email').type(email)
    cy.get('#Password').type(password)
    cy.get('.button-1').click()    
})

Cypress.Commands.add('HRIS_Login', (email, password) => {
    cy.visit('http://10.32.177.87/#/login')
    cy.title().should('eq', 'HRIS')
    cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper').type(email)
    cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper').type(password)
    cy.get('.mat-select-arrow').click()
    cy.get('#mat-option-0 > .mat-option-text').click()
    cy.get('.mat-raised-button').click()
})