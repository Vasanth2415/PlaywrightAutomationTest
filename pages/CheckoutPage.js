class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.page.locator("#first-name").fill("Vasantha");

    this.firstName = page.locator("#first-name");
    this.lastName = page.locator("#last-name");
    this.postalCode = page.locator("#postal-code");

    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
  }


async enterCheckoutInformation(firstName,lastName,postalCode){

    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
}

async continuCheckout(){

    await this.continueButton.click();
}


async finishOrder(){
    await this.finishButton.click();
}
}

module.exports = { CheckoutPage };
