describe('Handle Dropdown',()=>{

    it.skip('Static dropdown',()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#dropdown-class-example").select('Option2')
    })

    it.skip('Dynamic Dropdown',()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").type('Italy{enter}')

    })

    it('Autosuggestive DropDown', ()=>{

        cy.visit("https://www.wikipedia.org/")

        cy.get("input#searchInput").type('Delhi')
        cy.get('h3.suggestion-title').should('have.length',6)
        cy.get('h3.suggestion-title').contains('Delhi Metro').click()

        cy.get('.mw-page-title-main').should('contain','Delhi Metro')

        cy.visit("https://www.wikipedia.org/")

        cy.get("input#searchInput").type('Delhi')
        cy.get('h3.suggestion-title').each( ($el, index, $list) => {
            if($el.text()=='Delhi Metro')
            {
                cy.wrap($el).click()
            }
        })
        
        

    })

})