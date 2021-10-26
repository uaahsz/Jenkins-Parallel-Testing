/// <reference types="cypress" />

describe('Alerts Test Suite' ,function() 
{
    it('Alerts' ,function() {
        cy.visit("http://demo.automationtesting.in/Alerts.html")
        cy.get('#OKTab > .btn').click()

        cy.on('window:alert',(str) =>
        {
            expect(str).to.equal('I am an alert box!')
        })

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#OKTab > .btn').click();
        cy.get(':nth-child(10) > a').click();
        cy.get('.post-163 > .button').click();
        cy.get('.added_to_cart').click();
        cy.get('.remove').click();
        cy.get('#menu-icon').click();
        cy.get('#menu-icon-close').click();
        /* ==== End Cypress Studio ==== */
    })

    it('Alerts 2' ,function() {
       
        cy.visit("http://testautomationpractice.blogspot.com/")
        cy.get('#HTML9 > .widget-content > button').click()

        cy.on('window:confirm',(str) =>
        {
            expect(str).to.equal('Press a button!')
        })
    })
})