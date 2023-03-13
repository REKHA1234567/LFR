import randomNumber from "../../pageobjects/GenericUtilities/randomNumber.js"
import { default as baseClassPage } from "../../pageobjects/LFR/baseClass.page.js"
import loginPage from "../../pageobjects/LFR/login.page.js"
import logoutPage from "../../pageobjects/LFR/logout.page.js"
import packageListPage from "../../pageobjects/LFR/pacakageList.page.js"
import tourPackagePage from "../../pageobjects/LFR/tourPackage.page.js"

describe('Verify the admin created package is displayed in customer page', ()=>{
    
    let number = randomNumber.randomValues()
    let PackageName = "Beach View Party"+number

    it('Navigate the Application', async ()=>{await baseClassPage.openBrowser()})

    it('Login as admin', async ()=>{await loginPage.adminLogin()})

    it('Create Package', async ()=>{await tourPackagePage.createPackage(PackageName)})
    
    it('Logout as admin', async ()=>{await logoutPage.adminLogout()}) 

    it('Login as User', async ()=>{ await loginPage.userLogin() })

    it('Verifying the admin created package', async ()=>{ await packageListPage.createdPackageVerification(PackageName) })

    
})