class Recruitment_page_OrangeHrm
{
    RandomOptionselect()
    {
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Recruitment']").click()
        cy.xpath("(//div[@class='oxd-select-text oxd-select-text--active'])[1]").click()
        cy.xpath("//div[@role='listbox']//span").then($options => {
            const count = $options.length
            const randomIndex = Math.floor(Math.random() * count)
            const randomOption = $options.eq(randomIndex) 
            cy.wrap(randomOption).click(); 
        })
    }
    ScreenshotofRandomoption()
    { 
        cy.wait(5000)
        cy.screenshot("recruitment_page");
    }

}
export default Recruitment_page_OrangeHrm;