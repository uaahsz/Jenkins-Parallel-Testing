/// <reference types="cypress" />

define("UI Elements" ,function(){

    it("Verify Inputbox and Radio buttons" ,function(){
        
        cy.visit("http://demo.guru99.com/test/newtours/")
        cy.url().should('include','newtours')
        cy.get(':nth-child(2) > [width="112"] > input').should('be.visible').should('be.enabled').type("uaahsz")
        cy.get(':nth-child(3) > [width="112"] > input').should('be.visible').should('be.enabled').type("WFgk8apc")
        cy.get('div > input').should('be.visible').click()
        cy.get(':nth-child(2) > [width="80"] > a').click()
        cy.title().should('eq','Find a Flight: Mercury Tours:')
        cy.get('[value="roundtrip"]').should('be.visible').should('be.checked')
        cy.get('[value="oneway"]').should('be.visible').should('not.be.checked').click()
        cy.get('td > input').should('be.visible').click()
    })
})