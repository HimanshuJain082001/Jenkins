const {WelcomeActions}= require('../../../PageObject/PageActions/WelcomeActions');
const wel = new WelcomeActions
describe('Welcome Page',()=>
{
    it('welcome page validation',()=>
    {
        cy.visit(Cypress.env("URL"))
        cy.wait(2000);
        wel.DisplayPage()
    })
})
