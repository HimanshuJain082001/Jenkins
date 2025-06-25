const phonelocator = require('../PageElements/PhonePageElements.json');
export class phonepageActions
{
    phoneAdd()
    {
        cy.wait(2000);
        cy.get(phonelocator.PhonePage.mobileSamsung).click();
        cy.screenshot("Loginpage");
        cy.get(phonelocator.PhonePage.mobileNameValidation).should('have.text','Samsung galaxy s6');
        cy.wait(2000);
        cy.get(phonelocator.PhonePage.addtocartitem).click();
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.equal("Product added.");
        });
    }
}