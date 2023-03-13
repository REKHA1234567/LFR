import { default as baseClassPage } from "../../pageobjects/LFR/baseClass.page.js"
import loginPage from "../../pageobjects/LFR/login.page.js"
import managePagePage from "../../pageobjects/LFR/managePage.page.js"
import tourPackagePage from "../../pageobjects/LFR/tourPackage.page.js"

describe('Create New Package', ()=>{
    
    let number = Math.random();
    let PackageName = "Beach View Party"+number

    it('Navigate to the Application', async ()=>{ await baseClassPage.openBrowser() })

    it('Login as Admin', async ()=>{ await loginPage.adminLogin() })

    it('Create Package', async ()=>{ await tourPackagePage.createPackage(PackageName) })

    it('Manage Package', async ()=>{ await  tourPackagePage.managePackage() })

    it('Verifying the created package',async ()=>{ await managePagePage.createdPackageVerification(PackageName) })
})