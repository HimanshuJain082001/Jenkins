const { LoginActions,LoginElements } = require("../../../PageObject/PageActions/LoginActions");

const login = new LoginActions
describe('DemoBlaze is demo Website',()=>
{
    it('Click the Home Link and enter Login credentials',()=>
    {
        cy.visit(Cypress.env("URL"))
        cy.wait(2000)
        login.Homeforlogin()
        login.login()
        login.LoginData("Jioo","go")
        cy.wait(2000);

    })
})
