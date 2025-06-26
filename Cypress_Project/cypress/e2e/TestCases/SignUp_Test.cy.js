const { SignupElements, SignupActions } = require("../../../PageObject/PageActions/SignupActions")

const ele2 = new SignupActions
describe('DemoBlaze is demo Website',()=>
{
    it('Click the Home Link and enter SignUp credentials',()=>
    {
        cy.visit(Cypress.env("URL"))
        cy.wait(5000)
        ele2.Home()
        // ele2.signUp()
        // ele2.signupdetails("Jioo","go")
        cy.wait(3000);
    })
})
