
describe('Test Assertions',()=>{

    it('Implicit Assertions',()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')

        //cy.url().should('include','practicetestautomation')
        //.should('eq','https://practicetestautomation.com/practice-test-login/')

        cy.url().should('include','practicetestautomation')
        .and('eq','https://practicetestautomation.com/practice-test-login/')

        cy.get('input#username').type('student')
        cy.get('input#username').should('have.value','student')
        cy.get('input#password').type('Password123')
        cy.get('button#submit').click()

        cy.get('h1.post-title').should('not.contain','Logged Out Successfully')
    })

    it('Explicit Assertions', ()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('input#password').type('Password123')
        cy.get('button#submit').click()

        let expName = 'Logged In Successfully';
        
        cy.get('h1.post-title').then((x) =>{

            //BDD Style Assertion
            let actName = x.text()
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal('Logged Out Successfully')

            //TDD Style Assertion
            assert.equal(actName,expName)
            

        })




    })
})