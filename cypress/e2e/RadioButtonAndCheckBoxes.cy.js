describe('RadioButton Testing', ()=>{
    
    it('Open URL',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("[value='radio2']").should('be.visible').click()
        cy.get("#checkBoxOption3").click()
        cy.get("#checkBoxOption1").check()
        cy.get("#checkBoxOption3").uncheck()
        cy.get("#checkBoxOption1").uncheck()

        cy.get("[type='checkbox']").check()
        cy.get("[type='checkbox']").uncheck()

        cy.get("[type='checkbox']").first().check().should('be.checked')
        cy.get("[type='checkbox']").last().check()





    })
})