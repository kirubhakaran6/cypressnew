// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('addproduct', (product) => {
    cy.get('app-card-list.row app-card').each(($element)=>{
        if($element.text().includes(product)){
          cy.wrap($element).find('button').click()
   
        }
       })
        })
        Cypress.Commands.add('dynamic',(country)=>{
        //   cy.get('input#country').click().type('Ind')
        //      cy.get('div.suggestions ul li a').each(($el,index,$list)=>{
        //     if($el.text().includes(country)){
        //     cy.wrap($el).click({force:true})
        //   }
        //  })
        cy.get('input#country').click().type('Ind')
        cy.get('div.suggestions ul li a').contains('India').click({force:true})
        })

        Cypress.Commands.add('parseXlsx', (inputFile) => {
          return cy.task('parseXlsx', { filePath: inputFile })
          })



    // cy.get('app-card-list.row app-card').each(($element)=>{
    //     if($element.text().includes(product)){
    //       cy.wrap($element).find('button').click()
    //     } 
    // })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

 
