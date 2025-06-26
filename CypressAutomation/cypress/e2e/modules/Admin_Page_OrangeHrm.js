class Admin_Page_OrangeHrm
{
    adminAlertandPopup()
    {
        cy.scrollTo(0,80);
        cy.wait(2000)
        cy.get('.oxd-layout-footer > :nth-child(1)')
        cy.wait(1000)
        // cy.scrollIntoView()
        cy.get('.oxd-layout-footer > :nth-child(1)').click()
        // cy.xpath("//div[@id='oxd-toaster_1']").should('be.visible')
    }
    adminformfill()
    {
        cy.xpath("//span[normalize-space()='Admin']").click();
        cy.xpath("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").type("SiddhaTech001");
        cy.xpath("//button[normalize-space()='Add']").click();
        cy.xpath("(//div[@class='oxd-select-text oxd-select-text--active'])[1]").click()
        .type("a{enter}");
        cy.get('.oxd-autocomplete-text-input > input').type('Rahul Das',{timeout:10000}).type("{downArrow}").click();
        cy.xpath("(//div[@class='oxd-select-text oxd-select-text--active'])[2]").click()
        .type("e{enter}");
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]")
        .type("Tredit jee");
        cy.xpath("(//input[@type='password'])[1]").type("1233@siddha")
        cy.xpath("(//input[@type='password'])[2]").type("1233@siddha")
        cy.get("button[type='submit']").click();
    }
    checkbox()
    {
        cy.wait(2000)
        cy.xpath("//input[@placeholder='Search']").type("Admin").click();
        cy.get(".oxd-text.oxd-text--span.oxd-main-menu-item--name").click()
        cy.xpath("//a[@class='oxd-main-menu-item active']").click();
        cy.scrollTo(0,600);
        // cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get("[type = 'checkbox']").check({force:true})
        .should('be.checked');
    }
    Screenshot_Admin()
    {
        cy.wait(2000)
        cy.screenshot("Admin_Page_Ss")
    }
}
export default Admin_Page_OrangeHrm;