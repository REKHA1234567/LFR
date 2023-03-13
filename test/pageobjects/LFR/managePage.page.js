import { expect } from "chai"

class managePackage
{
 get packageLink()
 {
    return $(`//tbody/tr/td[@ data-th="Name"]/span[.='${this.PackageName}']`)
 }   

 async createdPackageVerification(packname)
 {
    this.PackageName = packname
    await this.packageLink.scrollIntoView()
    await this.packageLink.waitForDisplayed()
    let pckName = await this.packageLink.getText()
    console.log("Created Package Name is: "+pckName);
    expect(pckName).to.contains(packname)
 }
}

export default new managePackage()