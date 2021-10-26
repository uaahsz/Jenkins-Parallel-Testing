///<reference types="cypress" />

describe('Personal Info Test Suite', function(){
    it('Personal Information', function(){
        cy.HRIS_Login('anwarh','kk') //Used custom command HRIS_Login to Login
        cy.get('.profile-text').click()
        cy.get('.mat-menu-content > :nth-child(4) > span').click()
        cy.get(':nth-child(1) > :nth-child(4) > .col-lg-6 > .box-textarea-fieldcont > .box-textarea-title > .ng-untouched > #inlineEditWrapper > a.c-inline-editor').click({force: true})
        cy.get(':nth-child(1) > :nth-child(4) > .col-lg-6 > .box-textarea-fieldcont > .box-textarea-title > .ng-untouched > #inlineEditWrapper > .inlineEditForm > .form-group > inline-editor-text.ng-star-inserted > .form-control').type("Doctor")
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > :nth-child(4) > .col-lg-6 > .box-textarea-fieldcont > .box-textarea-title > .ng-pristine > #inlineEditWrapper > .inlineEditForm > .form-group > .inline-editor-button-group > .btn-danger > .fa').click();
        cy.get('.col-lg-3.pmatcard').click();
        cy.get(':nth-child(10) > :nth-child(3) > :nth-child(1) > :nth-child(3) > .edit-btn > .mat-button > .mat-button-wrapper > .material-icons').click();
        cy.get('[style="display: flex;justify-content: center;"] > :nth-child(1) > .mat-button-wrapper').click();
        cy.get('.ui-growl-icon-close').click();
        /* ==== End Cypress Studio ==== */
    })
})