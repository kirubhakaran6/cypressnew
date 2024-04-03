describe('http response',()=>{
before('before launch url',()=>{
    cy.visit('https://reqres.in/')
})
    it('request response',()=>{

     //  cy.visit('https://reqres.in/')
        cy.request('GET','https://reqres.in/api/users/2')
     .its('status').should('equal',200)
    })

it('post call',()=>{
cy.request({
    method:'POST',
    url:'https://reqres.in/api/users',
    body:{
        name: "morpheus",
    job: "leader"
    }
}).its('status').should('equal',201)


it('put call',()=>{
    cy.request({
method:'PUT',
url:'https://reqres.in/api/users/2',
body:{
    name: "morpheus",
    job: "zion resident"
}

    }).its('status').should('equal',200)
})

it('delete call',()=>{

    cy.request({
        method:'DELETE',
        url:'https://reqres.in/api/users/2',
        
    }).its('status').should('equal',204)
})

})

})