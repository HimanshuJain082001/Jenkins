class Time_Page_OrangeHrm
{
    MouseAction()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orangehrm').then((data)=>
            {
                cy.get("[name ='username']").type(data.Username)
                .should('have.value','Admin');
                cy.get("[name ='password']").type(data.Password)
                .should('have.value','admin123');
                cy.get("[type ='submit']").click()
    
            })
        cy.get(':nth-child(4) > .oxd-main-menu-item').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').trigger('mouseover').click()
        cy.wait(1000)
        cy.get('.oxd-dropdown-menu > :nth-child(2)').should('be.visible').click()

    }
}
export default Time_Page_OrangeHrm;