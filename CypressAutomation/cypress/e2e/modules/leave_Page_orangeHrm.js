class leave_Page_orangeHrm
{
    
    SetDateOnLeaveTaken()
    {
      cy.get(':nth-child(3) > .oxd-main-menu-item').click();
            cy.wait(2000)
            const getTodayDate = dayjs().format("DD-MM-YYYY");
            const getNextDate = dayjs().add(+1,'day').format("DD-MM-YYYY");//adding the next date to present date 
           
            cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear()
            .type(getTodayDate).click();//from date textfield
        //validation 
            
    
            cy.wait(2000)
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear()
            .type(getNextDate).click(); //To date TextField
    }
}
export default leave_Page_orangeHrm;