class Home_Page_OrangeHrm
{
    VerifyHomePage()
        {
            cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)").should('have.text','Time at Work');

        }
        
    SearchBar()
    {
        cy.get("input[placeholder='Search']").type("Admin");
        cy.get('.oxd-main-menu-item > .oxd-text').should('have.text','Admin').click();
    }
    ScreenShot_Home_page()
    {
        cy.wait(2222)
        cy.screenshot("Home_page_ss")
    }
}
export default Home_Page_OrangeHrm;