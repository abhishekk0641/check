
describe('CSS locators',() =>{
    it('test1',()=>{
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('Cypress{enter}')
        //cy.get('.gNO89b').click()

    })
})