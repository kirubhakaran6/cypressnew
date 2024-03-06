describe('webtable',()=>{
    it('select webtable and verify the value',()=>{

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('table tbody tr td:nth-child(2)').each(($table)=>{
    if($table.text().includes('WebSecurity')){
        cy.wrap($table).then((value)=>{

            const tablehead =value.text()
            cy.log(tablehead)


        })
    }
})

    })

    it('check  value from webtable',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table tbody tr td:nth-child(2)').each(($table)=>{
            if($table.text().includes('WebSecurity')){
                cy.wrap($table).next().then((value1)=>{
        
                    const tablehead1 =value1.text()
                    const price =parseInt(tablehead1)
                    expect(price).to.eq(20)
        
                })
            }
            })
        })

            it('check  prev value from webtable',()=>{

                cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
                cy.get('table tbody tr td:nth-child(2)').each(($table)=>{
                    if($table.text().includes('WebSecurity')){
                        cy.wrap($table).prev().then((value2)=>{
                
                            const tablehead2 =value2.text()
                            const price1 =parseInt(tablehead2)
                            expect(price1).to.eq(30)
                })
            }
        })
    })
})