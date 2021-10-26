/// <reference types="cypress" />

describe('Checkboxes and Dropdowns Test Suite' ,function() 
{
    it('Hobbies and Checkboxes' ,function() {
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')        
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get("[type=checkbox]").check(['Cricket','Hockey'])
        
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked') 
        
    })

    it('Skills Dropdown' ,function() {
        
        cy.get('#Skills').select('Android').should('have.value','Android') 
    })

    it('Languages Multi Select' ,function() {
        cy.get('#msdd').click()
        cy.get(".ui-corner-all").contains('English').click()
        cy.get(".ui-corner-all").contains('Japanese').click()
        cy.get('.select2-selection')
    })

    it('Select countries searchable drop down' ,function() {
        cy.get(".select2-selection").click({force: true})
        cy.get(".select2-search__field").type("Japan")
        cy.get(".select2-search__field").type('{enter}')
    })
})