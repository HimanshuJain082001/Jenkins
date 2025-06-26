class Claim_Page_OrangeHrm
{
    submitClaim()
    {
        cy.get(':nth-child(11) > .oxd-main-menu-item > .oxd-text').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
        cy.wait(2000);
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').type("a{enter}")
    }
    Screenshot_Claim()
    {
        cy.wait(2000)
        cy.screenshot("Claim_page")
    }
}
export default Claim_Page_OrangeHrm;