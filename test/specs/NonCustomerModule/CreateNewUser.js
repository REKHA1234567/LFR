import randomNumber from "../../pageobjects/GenericUtilities/randomNumber.js";
import { default as baseClassPage } from "../../pageobjects/LFR/baseClass.page.js";
import dashBoardPage from "../../pageobjects/LFR/dashBoard.page.js";
import loginPage from "../../pageobjects/LFR/login.page.js";
import manageUserPage from "../../pageobjects/LFR/managePage.page.js";
import signUpPage from "../../pageobjects/LFR/signUp.page.js";


describe('Create User and Verify the User Count', ()=>{
    let number = randomNumber.randomValues()
    let userName = "user"+number;
    let mail = "email"+number+"@gmail.com";
    let value_1 = ""
    it('Navigate to the Application', async ()=>{
        await baseClassPage.openBrowser()
    })

    it('Create New Account', async ()=>{
        await signUpPage.createNewUser(userName, mail)
    })

    it('Login as admin', async ()=>{
        await loginPage.adminLogin()
    })

    it('Get the user count from dashboard', async ()=>{
        value_1 = await dashBoardPage.getuserCount()
    })

    it('Get the user count from the manage user', async ()=>{
        await manageUserPage.getUserCount(value_1)
    })
})