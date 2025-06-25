const ContactLocators = require('../PageElements/ContactElements.json');
export class contactActions
{
    contactOption()
    {
        cy.wait(2000);
        cy.get(ContactLocators.contactlocator.contactbtn).click()
    }
    EnterEmail(email)
    {
        cy.get(ContactLocators.contactlocator.contactEmailAdd).type(email)
        // cy.get(ContactLocators.contactlocator.contactEmailAdd).should('have.text',"jio") 
    }
    Entername(contactName)
    {
        cy.get(ContactLocators.contactlocator.contactName).type(contactName)
    }
    EnterMessage(message)
    {
        cy.get(ContactLocators.contactlocator.MessageBox).type(message)
    }
    pressbtn()
    {
        cy.get(ContactLocators.contactlocator.SendMessage).click();
    }
    Closebutton()
    {
        cy.get(ContactLocators.contactlocator.closeBtn).click()
    }

}