describe('practice dropdown',()=>{

it('practice radiobutton',()=>{

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.url().should('include','AutomationPractice')
cy.get('input[value="radio1"]').check().should('be.checked')
//cy.get('input[value="radio1"]').uncheck().should('not.be.checked')

})

it('practice checkbox',()=>{
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.wait(5000)
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

})
it('multiple checkbox',()=>{
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('div#checkbox-example input[type="checkbox"]').check('option1','option3').should('be.checked')

})
it('practice dropdown',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
    cy.get('select').select('option1').should('have.value','option1')


})
it('practice dropdown',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('div.cen-left-align #autocomplete').type('ma')
    cy.get('li.ui-menu-item div').each(($ele,index,$list)=>{
        if($ele.text()=='maldives'){
            cy.wrap($ele).click()
        }
    })

})
it('switch tap',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('div #opentab').invoke('removeAttr','target').click()


})
})