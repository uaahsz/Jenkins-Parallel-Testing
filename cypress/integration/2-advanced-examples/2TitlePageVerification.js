describe('My Test Suite 2', function(){
    it('Title Page Verification', function(){
        cy.visit('https://hris.netsoltech.com/#/login')
        cy.title().should('eq','HRIS')

    })

    it('Page Title Verification', function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo store')
    })
})