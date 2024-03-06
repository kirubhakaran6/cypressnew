///<reference types ="cypress" />

describe('irctc search',()=>{
it('irctc details',()=>{
cy.visit('https://www.irctc.co.in/nget/train-search')
cy.wait(5000)
cy.get('span.ng-tns-c58-10.ui-calendar input[type="text"]').click({timeout:10000})

cy.get('table.ui-datepicker-calendar.ng-tns-c58-10 tbody tr td a[draggable="false"]').each(($calender)=>{

const date =$calender.text()
if(date==='18'){
    cy.wrap($calender).click()
}

})






 

})
})