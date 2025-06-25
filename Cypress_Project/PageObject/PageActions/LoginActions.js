const LoginLocators = require('../PageElements/LoginElements.json');
export class LoginActions
{ 
    Homeforlogin()
    {
        cy.get(LoginLocators.LoginLocators.home).click();
        // cy.screenshot("homepage");
    }
    login()
    {
        cy.get(LoginLocators.LoginLocators.loginbuttonBefore).click(); 
    }
    LoginData(usernamee,passwordd)
    {
        cy.get(LoginLocators.LoginLocators.usernameL).type(usernamee)
        cy.get(LoginLocators.LoginLocators.passwordl).type(passwordd)
        cy.get(LoginLocators.LoginLocators.loginBtnAfter).click();
        cy.screenshot("Loginpage");
    }
}