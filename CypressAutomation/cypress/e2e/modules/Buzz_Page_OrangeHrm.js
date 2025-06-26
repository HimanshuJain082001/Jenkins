class Buzz_Page_OrangeHrm
{
    Page01()
    {
    cy.get(':nth-child(12) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.oxd-button--label-warn').trigger('mouseover').click();
    cy.get("button[class='oxd-button oxd-button--medium oxd-button--label-warn orangehrm-post-filters-button']").click()

    }
}
export default Buzz_Page_OrangeHrm;