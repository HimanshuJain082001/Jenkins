const MonitorLocator = require('../PageElements/MonitorElements.json');
export class MonitorActions
{
    MonitorPurchase()
    {
        cy.contains("Home ").click()
        cy.wait(2000)
        cy.get(MonitorLocator.monitor.monitorBtn).click();
        cy.wait(3000)
        cy.get(MonitorLocator.monitor.selectedMonitor).click();
        cy.get(MonitorLocator.monitor.verifyName).should('have.text','Apple monitor 24');
        cy.get(MonitorLocator.monitor.AddtoCartBtn).click();
        cy.wait(2000)
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.equal("Product added.");
        });
        cy.wait(2000)
        cy.get(MonitorLocator.monitor.cartbtn3).click()
        if(cy.contains('Apple monitor 24'))
            {
                cy.contains('Delete').click()
                
            }
            else
            {
                cy.wait(4000);
            }   
    }

}