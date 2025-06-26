class Maintainence_Page_OrangeHrm
{
    WindowChange()
    {
        cy.xpath("//span[normalize-space()='Maintenance']").click();
        cy.wait(2000)
        cy.xpath("//input[@name='username']").should('have.value','Admin');
        cy.wait(2000)
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type("admin123")
        cy.get('.oxd-button--secondary').click();
        cy.wait(3000)
        cy.get('.oxd-autocomplete-text-input > input')
        .type("SiddhaTech")
        cy.get('.oxd-text.oxd-text--p.orangehrm-form-hint').should('have.text',' * Required');
        cy.xpath("//p[normalize-space()='Note']").should('have.text','Note');
        cy.get("button[type='submit']").click();
        cy.wait(3000)
        cy.get("button[title='Help']").click();
    }
    screenshot_Main()
    {
        cy.wait(2000)
        cy.screenshot("Maintain_page_ss")
    }
    back()
    {
        cy.go(-4);
    }
}
export default Maintainence_Page_OrangeHrm;