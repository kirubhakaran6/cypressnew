
describe('amazon page',()=>{
it(' login page',()=>{

cy.visit('https://www.amazon.in/')
cy.url().should('include','https://www.amazon.in/')
cy.get('div#nav-xshop-container a').contains("Today's Deals").click({force:true})
cy.get('div#slot-2 div h1').contains("Today's Deals").should('have.text',"Today's Deals")

})



})