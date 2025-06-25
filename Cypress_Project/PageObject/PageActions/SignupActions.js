const SignUpLocator = require('../PageElements/SignupElements.json')
export class SignupActions
{ 
    Home()
    {
        cy.get(SignUpLocator.SignUpLocators.homeLink).click();
    }
    signUp()
    {
        cy.get(SignUpLocator.SignUpLocators.signbutton).click();
    }
    signupdetails(usernamee,passwordd)
    {
        cy.get(SignUpLocator.SignUpLocators.username).type(usernamee)
        cy.get(SignUpLocator.SignUpLocators.password).type(passwordd)
        cy.get(SignUpLocator.SignUpLocators.signBtn).click()
    }
}