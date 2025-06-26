const {WelcomeActions}= require('../../../PageObject/PageActions/WelcomeActions');
const wel = new WelcomeActions
const { LoginActions,LoginElements } = require("../../../PageObject/PageActions/LoginActions");
const login = new LoginActions
describe('Welcome Page',()=>
{
    it('welcome page validation',()=>
    {
        cy.visit(Cypress.env("URL"))
        cy.wait(2000)
        login.Homeforlogin()
        login.login()
        login.LoginData("Jioo","go")
        cy.wait(2000);
        cy.visit(Cypress.env("URL"))
        cy.wait(2000);
        wel.DisplayPage()
    })
})
