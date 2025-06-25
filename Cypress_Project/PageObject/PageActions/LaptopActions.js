const LaptopLocator = require('../PageElements/LaptopElements.json');
const cartlocator = require('../PageElements/CartElements.json');
export class LaptopActions
{
    purchaseLaptop()
    {
        cy.wait(2000);
        cy.get(LaptopLocator.Laptop.laptopbtn).click();
        cy.wait(3000);
        cy.get(LaptopLocator.Laptop.Laptopname).click();
        cy.get(LaptopLocator.Laptop.SelectedLap).should('have.text','Sony vaio i5')
        cy.get(LaptopLocator.Laptop.lapPrice).should('have.text','$790 *includes tax');
        cy.get(LaptopLocator.Laptop.AddBtn).click();
        cy.wait(2000);
        cy.get(LaptopLocator.Laptop.cartBtnL).click();
        cy.wait(2000)
        if(cy.contains('Sony vaio i5'))
            {
                cy.contains('Delete').click()
            }
            else
            {
                cy.wait(4000);
            }     
    }

}