const LogoutLocator = require('../PageElements/LogoutElements.json');
export class LogoutActions
{
    Logout()
    {
        cy.wait(2000);
        cy.get(LogoutLocator.LogoutLocator.LogoutBtn).click()
    }

}