describe('api intercept',()=>{
    it('api intercept call',()=>{

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    

        cy.intercept({
            method :'GET',
            url :'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

        },
        {
            statuscode :200,
            body :[{
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302" }]
    
    
                }).as('intercept')

            cy.get('button[class="btn btn-primary"]').click()

            cy.wait('@intercept').then(({reqest,response})=>{
                cy.get('tr').should('have.length',response.body.length+1)
            })
            cy.get('p').contains('Oops only 1 Book available').should('have.text','Oops only 1 Book available')
    })


it('intercept and intergration blw ui and api',()=>{

    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(request)=>{

    request.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=kirubha'
    
    request.continue((response)=>{

      expect(response.statusCode).to.equal(403)
    })

    }).as('modifyurl')
    cy.get('button[class="btn btn-primary"]').click()
    cy.wait('@modifyurl')
    

})
console.log('api intercept')
})