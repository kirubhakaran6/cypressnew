class verification{

    verifyurl(){
      return  cy.url().should('include','/angularpractice/')
    }
assertText(){
   return cy.get('label[for="exampleCheck1"]').should('have.text','Check me out if you Love IceCreams!')
}

verifySucessAlert(){
    cy.get('div.alert.alert-success.alert-dismissible').contains('Success! The Form has been submitted successfully!.')
}
verifyName(){
    cy.get('input[name="name"]:nth-child(1)').should('have.value','kirubhakaran')
}
verifyShoptext(){
    cy.get('div.col-lg-3 h1').contains('Shop Name').should('have.text','Shop Name')
}
successMessage(){
    cy.get('div div.alert.alert-success.alert-dismissible',{timeout:10000})
    cy.get('div .alert').then((msg)=>{
     const alert =msg.text()
expect(alert).to.include('Success! Thank you! Your order will be delivered in next few weeks :-).')
    })
}


}
export default verification