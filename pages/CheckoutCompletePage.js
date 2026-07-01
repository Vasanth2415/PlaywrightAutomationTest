class CheckoutCompletePage {
  constructor(page) {
    this.page = page;

    this.orderHeader = page.locator(".complete-header");
    this.confirmationMessage = page.locator(".complete-text");
  }

 async getOrderHeader() {
  await this.orderHeader.waitFor({ state: "visible" });
  return (await this.orderHeader.textContent())?.trim();
}

  async getConfirmationMessage() {
    await this.confirmationMessage.waitFor({ state: "visible" });
  return (await this.confirmationMessage.textContent())?.trim();
  }

  async expectOrderSuccess() {
  await expect(this.orderHeader).toBeVisible();
  await expect(this.confirmationMessage).toBeVisible();
}
}

module.exports = { CheckoutCompletePage };
