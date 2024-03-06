/// <reference types="Cypress" />



describe('checkbox practice',()=>{

    it('loginpage',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
cy.get('.oxd-button').click()
cy.get(':nth-child(7) > .oxd-main-menu-item').click()

cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('kirubha')

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').type('Finance Manager').click()

cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').type('In Progress').click()

cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()


cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click()




cy.get('.oxd-button--secondary').click()
    })

})