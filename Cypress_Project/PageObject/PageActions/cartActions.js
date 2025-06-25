const cartlocator = require('../PageElements/CartElements.json');
export class cartActions
{
    CartComponent()
    {
        cy.wait(2000)
        cy.get(cartlocator.CartLocator.cartbtn).click();
        // cy.scrollTo(0,400);
        cy.wait(3000);
        
        // const phone= cy.xpath(cartlocator.CartLocator.phoneData).should('have.text','Samsung galaxy s6')
        if(cy.contains('Samsung galaxy s6'))
        {
            cy.get(cartlocator.CartLocator.deletebtn).click();
        }
        else
        {
            cy.wait(4000);
        }
        
    }
    placeorder(name,country,city,creditcard,month,year)
    {
        cy.wait(3000)
        cy.get(cartlocator.PlaceOrder.placeorderbtn).click();
        cy.wait(2000);
        cy.get(cartlocator.PlaceOrder.EnterDetails.Name).type(name)
        cy.wait(2000);
        cy.get(cartlocator.PlaceOrder.EnterDetails.Country).type(country)
        cy.wait(2000);
        cy.get(cartlocator.PlaceOrder.EnterDetails.City).type(city)
        cy.wait(2000);
        cy.get(cartlocator.PlaceOrder.EnterDetails.Creditcard).type(creditcard)
        cy.wait(2000);
        cy.get(cartlocator.PlaceOrder.EnterDetails.Month).type(month)
        cy.wait(2000);
        cy.get(cartlocator.PlaceOrder.EnterDetails.Year).type(year)
        cy.wait(2000);
        cy.get(cartlocator.PlaceOrder.EnterDetails.PurchaseBtn).click()
        cy.wait(2000);
        cy.get(cartlocator.PlaceOrder.EnterDetails.confirm).click()
    }
}
