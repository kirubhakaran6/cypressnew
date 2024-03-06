///<reference types ="cypress" />

describe('asserestion login page',() => {

    it('login page',()=>{
 cy.visit('https://practicetestautomation.com/practice-test-login/')

 cy.get('input#username').type('student')
cy.get('input#password').type('Password123')
cy.get('button#submit').click()

cy.url().should('include','practicetestautomation.com/logged-in-successfully/')

cy.get('div .post-content strong').should('have.text','Congratulations student. You successfully logged in!')

cy.get('div .wp-block-group a ').should('be.visible')

})

it('login negative assertion',()=>{
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.get('input#username').type('studen')
    cy.get('input#password').type('Password123')

    cy.get('button#submit').click()

    cy.get('div #error').should('be.visible')
cy.get('div #error').should('have.text','Your username is invalid!')
})
it('login assertion wrong password',()=>{

    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.get('input#username').type('student')
    cy.get('input#password').type('Password')

    cy.get('button#submit').click()

    cy.get('div .show').should('be.visible')

    cy.get('div .show').should('have.text','Your password is invalid!')


})
 
})
