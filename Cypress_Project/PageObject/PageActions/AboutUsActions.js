const About = require('../PageElements/AboutUsElements.json');
export class AboutUsActions
{
    AboutUsPage()
    {
        cy.wait(2000)
        cy.get(About.AboutUsLocator.AboutUsBTn).click()
        cy.get(About.AboutUsLocator.AboutUsContent).should('have.text','The media could not be loaded, either because the server or network failed or because the format is not supported.')
        cy.wait(2000)
        cy.get(About.AboutUsLocator.CloseBtn).click();
        cy.wait(2000);
    }
}