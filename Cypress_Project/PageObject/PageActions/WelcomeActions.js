const Welcome = require('../PageElements/WelcomeElements.json');

export class WelcomeActions
{
    DisplayPage()
    {
        cy.get(Welcome.WelcomeLocator.WelcomeTitle).should('have.text','Welcome Jioo').click();
        cy.get(Welcome.WelcomeLocator.ImageDis).should('be.visible');  
    }
    MovementLeftandRight()
    {
        cy.get(Welcome.WelcomeLocator.rightSlider).click();
        cy.wait(2000);
        cy.get(Welcome.WelcomeLocator.leftSlider).click();
    }
    ValidationOfWords()
    {
        cy.get(Welcome.WelcomeLocator.Phone).should('have.text','Phones');
        cy.get(Welcome.WelcomeLocator.Monitors).should('have.text','Monitors');
    }

}




















