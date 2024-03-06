import "cypress-iframe"
describe('iframe approach',()=>{

it('iframe',()=>{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('iframe#courses-iframe')
    cy.iframe().find('ul.navigation.clearfix li a[href="learning-path"]',).contains('Learning paths').click()

})
})