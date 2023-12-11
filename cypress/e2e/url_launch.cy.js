describe('first cypress test', () => {

    it('launch url-positive',()=>{
      cy.visit('https://www.google.com/')
      cy.title().should('eq','Google')
    })
    it('verify title-negative',()=>{
      cy.visit('https://www.google.com/')
      cy.title().should('not.contain','Google123')
    })
})