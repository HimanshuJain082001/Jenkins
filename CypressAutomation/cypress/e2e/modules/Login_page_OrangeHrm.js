class Login_page_OrangeHrm
{ 
    //create variable remain
    Visit()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','opensource')
        .and('not.contain','greenhrm');
        
    }
    presenteleAndforgetPassword()
    {
        cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").should('contain','Login');
        cy.get(".oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--gray-lighten-2.orangehrm-demo-credentials")
        .should('contain','Username : Admin').and('contain','Password : admin123');
        cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").should('contain','Forgot your password? ').click();
        cy.get(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title").should('contain','Reset Password')
        cy.go(-1);
        cy.get("button[type='submit']").should('contain','Login');
       
       

    }
    
    LoginDetails()
    {
        cy.fixture('orangehrm').then((data)=>
        {
            cy.get("[name ='username']").type(data.Username)
            .should('have.value','Admin');
            cy.get("[name ='password']").type(data.Password)
            .should('have.value','admin123');
            cy.get("[type ='submit']").click()

        })

    }
    screenshot_login_page()
    {
        cy.wait(2000)
        cy.screenshot("Login_page_ss")
    }
    verifyLogin()
    {
        cy.get("[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('have.text', 'Dashboard')
    }
  
}
export default Login_page_OrangeHrm;