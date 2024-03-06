/// <reference types="Cypress" />


describe('Demo practice', () => {
  it('login', () => {
    cy.visit('https://www.youtube.com/')

    cy.url().should('include','YouTube')

    cy.url().should('eq','https://www.youtube.com/')

  
  })

it('verify title',()=>{

cy.visit('https://www.youtube.com/')

cy.title().should('include','YouTube')
cy.title().should('eq','YouTube')



})
})