describe('Test JavaScript Alerts',()=>{

    it('Javascript Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).contains('I am a JS Alert')
        })
        //cypress will automatically close alert popup

        cy.get('#result').should('have.text','You successfully clicked an alert')

    
    it('JavaScript Confirm',()=>{

        cy.get("[onclick='jsConfirm()']").click()

        cy.on('window:alert',(z)=>{
            expect(z).contains('I am a JS Confirm')
        })



    })    
    })
})