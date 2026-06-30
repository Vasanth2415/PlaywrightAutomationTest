class CheckoutCompletePage {

    constructor(page){

this.page = page;

this.orderHeader = page.locator('.complete-header');
this.confirmationMessage = page.locator('.complete-text');

    }

async getOrderHeader(){

    return await this.orderHeader.textContent();
}

async getConfirmationMessage(){

    return await this.confirmationMessage.textContent();
}
}

module.exports = { CheckoutCompletePage };