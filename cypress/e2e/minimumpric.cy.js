
describe('get minimum price',()=>{
    it('login page',()=>{
        
        cy.visit('https://www.amazon.in/ ')
        cy.get('#twotabsearchtextbox').click().type('cypress')
        cy.get('div#nav-flyout-searchAjax div div div span').contains('perfume').click()
        //cy.get('#nav-search-submit-button').click({force:true})
        cy.get('div.a-row.a-size-base.a-color-base div a span.a-price-whole').each(($ele,index,$list)=>{
            const minprice =parseFloat($ele.text())
            
            // console.log($ele.text());
          const price =[]
             price.push($ele.text())
             cy.wrap(price)
            //  console.log(price);
              const item =price.sort()
              console.log(item);       
            
        var prices = Math.min(...item)
        })
       // const price =[]
        //cy.get('div.a-row.a-size-base.a-color-base div a span.a-price-whole').each(($elem,index,$list)=>{
           // price.push($elem.text())
               // cy.wrap(price)
                //price.sort()
            
    
        
            
        })
       
    })