class checkButton{

checkButton(){
   return cy.get('#exampleCheck1')
}
radioButton(){
   return cy.get("input[id='inlineRadio1']")
}
checkradio(){
   return cy.get('input[id="checkbox2"]')
}
checkpurchase(){
   return cy.get('input[value="Purchase"]').click({force:true}) 
}
checkmenubar(){
  return cy.get('button[class="navbar-toggler"]').click({force:true})
}
clickitem(){
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click({force:true})
}
clickcheckoutbutton(){
    cy.get('table tbody  td button[type="button"]').contains('Checkout').click()
}
clickshop(){
    cy.get('li.nav-item a').contains('Shop').click()
}
clickbirthday(){
    cy.get('div.form-group input[name="bday"]').click()
}
clickSubmit(){
    cy.get('input[type="submit"]').click()
}
dynamicdropdown(){
    cy.get('input#country').click().type('Ind')
    // cy.get('div.suggestions ul li a').each(($ele,index,$list)=>{
    //     if($ele.text().includes('India')){
    //     cy.wrap($ele).click({force:true})
    //   }
    //  })
    cy.get('div.suggestions ul li a').contains('India').click({force:true})
}

}
export default checkButton