import { LoginActions } from "../../../PageObject/PageActions/LoginActions";
import { WelcomeActions } from "../../../PageObject/PageActions/WelcomeActions";
import { contactActions } from "../../../PageObject/PageActions/contactActions";
import { phonepageActions } from "../../../PageObject/PageActions/phonepageActions";
import { cartActions } from "../../../PageObject/PageActions/cartActions";
import { LaptopActions } from "../../../PageObject/PageActions/LaptopActions";
import { MonitorActions } from "../../../PageObject/PageActions/MonitorActions";
import { LogoutActions } from "../../../PageObject/PageActions/LogoutActions";
import { AboutUsActions } from "../../../PageObject/PageActions/AboutUsActions";
const login = new LoginActions
const wel = new WelcomeActions
const con = new contactActions
const ph = new phonepageActions
const cart = new cartActions
const lapi = new LaptopActions
const moni= new MonitorActions
const logout = new LogoutActions
const about = new AboutUsActions
describe('DemoBlaze is demo Website using for Automation',()=>
{
    before('login',()=>
    {cy.visit(Cypress.env("URL"))
    })
    it('Login and Purchase the Items Flow',()=>
    {
        // cy.visit(Cypress.env("URL"))
        cy.wait(2000)
        login.Homeforlogin()
        login.login()
        login.LoginData("aha","aha")

        //welcome Page
        cy.wait(2000);
        wel.DisplayPage()
        wel.MovementLeftandRight()

        //contact
        cy.wait(3000)
        con.contactOption()
        con.EnterEmail("jio")
        con.Entername("tech-Hii")
        con.EnterMessage("if your bad I am try to become you good")
        con.pressbtn();

       //PhoneSection
        ph.phoneAdd()

       //cart phone purchased
        cart.CartComponent();
        cart.placeorder("siddha","India","pune",34532422,"nov",2024);

       //Purchased laptop
        lapi.purchaseLaptop()

        //Purchased Monitor
        moni.MonitorPurchase()

        //about Us
        about.AboutUsPage()
    })
    after('logout',()=>
    { cy.wait(2000);
      logout.Logout();
    })
})



    

