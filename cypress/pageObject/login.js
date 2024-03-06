class loginPage{
 
    userNamefield(userN){
       return cy.get("input[name='name']:nth-child(2)").type(userN)
    }
 userEmailField(userM){
     return cy.get("input[name='email']:nth-child(2)").type(userM)
 }
userPassword(userP){
   return cy.get("input[id='exampleInputPassword1']").type(userP)
}
userBirthday(userD){
    cy.get('input[name="bday"]').type(userD)
}

userCountry(userC){
    cy.get('input.validate.filter-input.form-control.ng-untouched.ng-pristine.ng-valid').type(userC)
}
}
export default loginPage 