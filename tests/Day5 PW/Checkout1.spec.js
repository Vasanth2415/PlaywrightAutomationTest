const { CheckoutCompletePage } = require('../../pages/CheckoutCompletePage');
const {test,expext}= require('../../Fixtures/loginFixture');

const testData  = require('../utils/testData');

test('Add product, checkout, complete order and validate success message', async({page,inventoryPage,cartPage,checkoutPage,checkoutCompletePage}) => {

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
testData.checkOut.firstName,
testData.checkOut.lastName,
testData.checkOut.postalCode
);

// Continue

await checkoutPage.continueCheckout();

// Finish Order

await checkoutPage.finishOrder();

// Validation

await expect(page).toHaveUrl('/checkout-complete.html/');

console.log(await checkoutCompletePage.getOrderHeader());


await expect (checkoutCompletePage.getOrderHeader).toHaveText('Thank you for your order!');

await expect(checkoutCompletePage.getConfirmationmessage());

await expect(checkoutCompletePage.Confirmationmessage).toContainText('Your order has been dispatched');

console.log('******* Order Completed Successfully **************');


})