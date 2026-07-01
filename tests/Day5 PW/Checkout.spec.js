const { test, expect } = require("../../Fixtures/loginFixture");
const testData = require("../../utils/testData");

test("Add product, checkout, complete order and validate success message", async ({
  page,
  inventoryPage,
  cartPage,
  checkoutPage,
  checkoutCompletePage,
}) => {
  // Add Products

  await inventoryPage.addItemsToCart(3);

  // Open Cart

  await inventoryPage.openCart();

  // VerifyCart

  await expect(cartPage.cartItems.first()).toBeVisible();
  console.log(await cartPage.getCartItems());

  //Checkout

  await cartPage.proceedToCheckout();

  // Fill Checkout information

  await checkoutPage.enterCheckoutInformation(
    testData.checkoutData.checkout.firstName,
    testData.checkoutData.checkout.lastName,
    testData.checkoutData.checkout.postalCode,
  );

  // Continue

  await checkoutPage.continueCheckout();

  // Finish Order

  await checkoutPage.finishOrder();

  // Validation

  await expect(page).toHaveURL(/checkout-complete.html/);

  console.log(await checkoutCompletePage.getOrderHeader());

  await expect(checkoutCompletePage.orderHeader).toContainText(
    "Thank you for your order!");

  console.log(await checkoutCompletePage.getConfirmationMessage());

  await expect(checkoutCompletePage.confirmationMessage).toContainText(
    "Your order has been dispatched");

  console.log("******* Order Completed Successfully **************");
});
