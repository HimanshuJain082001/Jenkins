import Login_page_OrangeHrm from "../modules/Login_page_OrangeHrm";
import Home_Page_OrangeHrm from "../modules/Home_Page_OrangeHrm";
import Admin_Page_OrangeHrm from "../modules/Admin_Page_OrangeHrm";
import Recruitment_page_OrangeHrm from "../modules/Recruitment_page_OrangeHrm";
import Maintainence_Page_OrangeHrm from "../modules/Maintainence_Page_Orangehrm";
import PIM_page_OrangeHrm from "../modules/PIM_page_OrangeHrm";
import Claim_Page_OrangeHrm from "../modules/Claim_Page_OrangeHrm";
import Buzz_Page_OrangeHrm from "../modules/Buzz_Page_OrangeHrm";


describe('Orangehrm_Project',()=>
{
    beforeEach(()=>
        {
            cy.task('clearScreenshots');
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.getCookies().should('have.length',1)
           .then((cookie)=>
          {
            expect(cookie[0]).to.have.property('name','orangehrm');
           })
           // cy.clearCookie('orangehrm')
           // cy.getCookies().should('have.length',1)
           cy.clearAllCookies()
           cy.getCookies().should('have.length',0);
           cy.clearLocalStorage("ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o=")
           .then((ls)=>
        {
            expect(ls.getItem("ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o=")).to.be.null;
        })
     
       
       
        
        })
    it('OrangeHrm_Pages',()=>
    {
        const login = new Login_page_OrangeHrm();
        login.Visit();
        login.presenteleAndforgetPassword();
        login.LoginDetails();
        login.screenshot_login_page();
        login.verifyLogin();
       

        const homepage = new Home_Page_OrangeHrm();
        homepage.VerifyHomePage();
        homepage.SearchBar();
        homepage.ScreenShot_Home_page();

        const admin = new Admin_Page_OrangeHrm();
        admin.adminAlertandPopup();
        admin.adminformfill();
        admin.checkbox();
        admin.Screenshot_Admin();

        const pim = new PIM_page_OrangeHrm();
        pim.Edit();
        pim.Myinfo();
        pim.Screenshot_PIM();

        const claim = new Claim_Page_OrangeHrm();
        claim.submitClaim();
        claim.Screenshot_Claim();

        const Recruitment = new  Recruitment_page_OrangeHrm();
        Recruitment.RandomOptionselect();
        Recruitment.ScreenshotofRandomoption();

        const maintain = new Maintainence_Page_OrangeHrm();
        maintain.WindowChange();
        maintain.screenshot_Main();
        maintain.back();

        const buzz = new Buzz_Page_OrangeHrm();
        buzz.Page01();
        
    })
})