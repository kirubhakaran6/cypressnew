describe('amazon',()=>{
    it('getproduct',()=>{

        cy.visit('https://www.amazon.in/')
        cy.get("div#CardInstancegNnaxKmZ40-h5yctRE44Gw:nth-child(1) div div ul li span span span span[class='a-truncate-cut']",{timeout:10000}).each(($ele,index,$list)=>{
            if($ele.text().includes('Best Offers on Storite')){
               
                cy.wrap($ele).click({force:true})
            }
        })


    })
})