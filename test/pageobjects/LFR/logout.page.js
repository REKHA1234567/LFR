import { expect } from "chai"

class logout
{
    get downArrow()
    {
        return $('//i[@ class="fa fa-angle-down"]')
    }
    get adminLogoutLink()
    {
        return $('//a[@ href="logout.php"]')
    }
    get backToHomeLink()
    {
        return $('//a[.="Back to home"]')
    }
    get userLogoutLink()
    {
        return $(`//a[.='/ Logout']`)
    }

    async adminLogout()
    {
        await this.downArrow.click()
        await this.adminLogoutLink.waitForDisplayed()
        await this.adminLogoutLink.click()
        let logoutTitle = await browser.getTitle()
        console.log("Title of the page is: "+logoutTitle)
        expect(logoutTitle).to.equal("LFR | Admin Sign in")
        await this.backToHomeLink.click()
        let logoutTitle2 = await browser.getTitle()
        console.log("Title of the page is: "+logoutTitle2)
        expect(logoutTitle2).to.equal("LFR | Tourism Management System")
    }

    async userLogout()
    {
        await this.userLogoutLink.click()
        let title = await browser.getTitle()
        expect(title).to.equal("LFR | Tourism Management System")
    }
}

export default new logout();