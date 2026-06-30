const { CheckoutCompletePage } = require('../../pages/CheckoutCompletePage');
const {test,expect}= require('../../Fixtures/loginFixture');
const testData  = require('../../utils/testData');

test('Add product, checkout, complete order and validate success message', 
    async({page,inventoryPage,cartPage,checkoutPage,checkoutCompletePage}) => {

// Add Products

await inventoryPage.addItemsToCart(3);

// Open Cart

await inventoryPage.openCart();

// VerifyCart

await expect(cartPage.cartItems.first()).toBeVisible();
console.log(await cartPage.getCartItems());

//Checkout 

await cartPage.proceedToCheckOut();

// Fill Checkout information

await checkoutPage.enterCheckoutInformation(
testData.checkout.firstName,
testData.checkout.lastName,
testData.checkout.postalCode
);

// Continue

await checkoutPage.continueCheckout();

// Finish Order

await checkoutPage.finishOrder();

// Validation

await expect(page).toHaveURL(/checkout-complete.html/);

console.log(await checkoutCompletePage.getOrderHeader());


await expect (checkoutCompletePage.orderHeader).toHaveText('Thank you for your order!');

console.log(await checkoutCompletePage.getConfirmationMessage());

await expect(checkoutCompletePage.confirmationMessage).toContainText('Your order has been dispatched');

console.log('******* Order Completed Successfully **************');


})