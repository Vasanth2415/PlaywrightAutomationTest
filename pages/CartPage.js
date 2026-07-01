class CartPage {
  constructor(page) {
    this.page = page;

    this.cartItems = page.locator(".cart_item");
    this.checkoutBtn = page.locator('[data-test="checkout"]');
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }

  async getCartItems() {
    return this.cartItems.allTextContents();
  }

  async getCartCount() {
  return await this.cartItems.count();
}
}

module.exports = { CartPage };
