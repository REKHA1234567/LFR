import { expect } from "chai"
import pathPage from "./path.page"

class signUp
{
    get signUpLink()
    {
        return $('//a[.="Sign Up"]')
    }
    get fullName_txt()
    {
        return $('[name = "fname"]')
    }
    get mobileNumber_txt()
    {
        return $('[name = "mobilenumber"]')
    }
    get email_txt()
    {
        return $('[name = "email"]')
    }
    get password_txt()
    {
        return $('[name = "password"]')
    }
    get submitButton()
    {
        return $('[name = "submit"]')
    }

    async createNewUser(userName, mail)
    {
        await this.signUpLink.waitForEnabled()
        await this.signUpLink.click();
        await this.fullName_txt.setValue(userName);
        await this.mobileNumber_txt.setValue(pathPage.allPaths.newUserMobileNO);
        await this.email_txt.setValue(mail);
        await this.password_txt.setValue(pathPage.allPaths.newUserPassword);
        await this.submitButton.waitForClickable()
        await this.submitButton.click();

    let conformationTitle = await browser.getTitle();
    console.log("Title of the page is: "+conformationTitle);
    expect(conformationTitle).to.equals("LFR | Confirmation")
    }
}
export default new signUp()