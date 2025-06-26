class PIM_page_OrangeHrm
{
    Edit()
    {
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)').click()


    }
    Myinfo()
    {
        cy.get("input[placeholder='First Name']").clear()
        cy.wait(2000)
        cy.get("input[placeholder='First Name']").type('Raja Shree mahan')
        cy.get("div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] button[type='submit']").click()
    }
    Screenshot_PIM()
    {
        cy.wait(2000)
        cy.screenshot("Pim_page_orangehrm")
    }
  
}
export default PIM_page_OrangeHrm;