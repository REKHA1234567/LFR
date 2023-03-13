import { expect } from "chai";
import pathPage from "./path.page.js";
class baseClass
{
    async openBrowser()
    {
        await browser.maximizeWindow()
        await browser.url(pathPage.allPaths.url)
        let applicationTitle = await browser.getTitle()
        console.log("Title of the page is: "+applicationTitle)
        expect(applicationTitle).to.contains("Let’s Feel Romania")
    }
}
export default new baseClass()