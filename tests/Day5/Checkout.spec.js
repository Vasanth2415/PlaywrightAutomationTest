const { test, expect } = require('@playwright/test');

test("Add product, checkout, complete order and validate success message", async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // Login to the application
    const userName = page.locator('#user-name');
    const password = page.locator('#password');
    const loginBtn = page.locator('#login-button');

    await userName.fill('standard_user');
    await password.fill('secret_sauce');
    await loginBtn.click();


    // Add Products to the cart

    const addToCartButtons = page.locator('button[data-test^="add-to-cart"]');

    await addToCartButtons.nth(0).click();
    await addToCartButtons.nth(1).click();
    await addToCartButtons.nth(2).click();


    // Verify the Added items in the cart
    const cartIcon = page.locator('.shopping_cart_link');
    await cartIcon.click();

    const cartItems = page.locator('.cart_item');
    await expect(cartItems.first()).toBeVisible();

    console.log('Items in the cart: ', await cartItems.allTextContents());


    // Checkout the items in the cart

    const checkoutBtn = page.locator('[data-test="checkout"]');
    await checkoutBtn.click();


    // Fill the Checkout Information

    await page.locator('#first-name').fill('Vasantha');
    await page.locator('#last-name').fill('Kumar');
    await page.locator('#postal-code').fill('600001');


    // Continue to the Checkout process

    await page.locator('#continue').click();


    // Finish order
    await page.locator('#finish').click();

// Validate the success page
  await expect(page).toHaveURL(/checkout-complete.html/);

// Validate the success message
const orderHeader = await page.locator('.complete-header').textContent();
console.log('Order Header: ', orderHeader);
await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

// Validate the Confirmation message
const confirmationMessage = await page.locator('.complete-text').textContent();
console.log('Confirmation Message: ', confirmationMessage);
await expect(page.locator('.complete-text')).toHaveText('\n Your order has been dispatched, and will arrive just as fast as the pony can get there!');

console.log('**** Order Completed Successfully ****');

});