describe('xpologin',()=>{
    it('loginpage',()=>{

cy.visit('https://www.xpo.com/')
cy.get('button.SiteNav-menuAction').click()
cy.get('li.SiteNavM-item span[class="SiteNavM-subnavIcon SiteNavM-back"]').click({force:true})
cy.get('button.SiteNavM-menulabel.js-keep-open').contains('Ship, Track, Quote').click({force:true})
cy.get('ul.SiteNavM-menu li a').contains('Track a Shipment').click({force:true})
    })

    it.only('track page',()=>{
        cy.visit('https://www.xpo.com/')
        cy.get('button span[class="SiteNav-hamburgerIcon"]').click()
       // cy.get('a.Hero-button--primary').invoke('removeAttr','target').click({force:true})

        cy.get('ul li[class="SiteNavM-item"] a').contains('Request a Quote').invoke('removeAttr','target').click({force:true})

        cy.get('mat-card a:nth-child(2) div:nth-child(3)').contains('chevron_right').click()
        
       
    })
})