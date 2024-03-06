import loginPage from "../pageObject/login"
import checkButton from "../pageObject/checkbutton"
import verification from "../pageObject/assert"
describe('practice protoecommerce',()=>{
let userdata
before(() => {
   cy.fixture('protodata').then((data)=>{
userdata=data
   })
  })
  const login = new loginPage
  const check = new checkButton
  const assert  = new verification
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
  })

  

  after(() => {
       console.log('product checkout');
  })
 it('protologin',()=>{
cy.visit('https://rahulshettyacademy.com/angularpractice/')

cy.request('GET','https://rahulshettyacademy.com/angularpractice/').then((page)=>{
expect(page.status).to.eq(200)
})

//cy.url().should('include','/angularpractice/')
assert.verifyurl()
login.userNamefield(userdata.name)
login.userEmailField(userdata.email)
login.userPassword(userdata.password)
check.checkButton().check().should('be.checked')
assert.assertText()
cy.get('select').select('Male')
check.radioButton().check().should('be.checked')
check.clickbirthday()
login.userBirthday(userdata.dates)
check.clickSubmit()
//cy.get('div.alert.alert-success.alert-dismissible').contains('Success! The Form has been submitted successfully!.')
assert.verifySucessAlert()
assert.verifyName()
    })

    it.only('proto shop page',()=>{
     check.clickshop()
    assert.verifyShoptext()
     cy.wait(7000)
    
     userdata.productlist.forEach((ele)=>{
      cy.addproduct(ele)
     })
    
     
     check.checkmenubar()
     cy.wait(7000)
     check.clickitem()
     check.clickcheckoutbutton()
    
    //  login.userCountry(userdata.country)
    //  cy.get('div .suggestions ul li a',{timeout:10000}).each(($ele,index,$list)=>{
    //     if($ele.text().includes('India')){
    //     cy.wrap($ele).click({force:true})
    //   }
    //  })
      
       cy.dynamic(userdata.country).as('dydrop')
       cy.wait('@dydrop')
    
    cy.wait(4000)
    check.dynamicdropdown()
     check.checkradio().check({force:true}).should('be.checked')
     check.checkpurchase()
     cy.wait(7000)
//      cy.get('div div.alert.alert-success.alert-dismissible',{timeout:10000})
//      cy.get('div .alert').then((msg)=>{
//       const alert =msg.text()
// expect(alert).to.include('Success! Thank you! Your order will be delivered in next few weeks :-).')
//      })
 
assert.successMessage()

    })
})