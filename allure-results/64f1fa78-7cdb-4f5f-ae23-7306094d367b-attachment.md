# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day5 PW\Checkout.spec.js >> Add product, checkout, complete order and validate success message
- Location: tests\Day5 PW\Checkout.spec.js:4:1

# Error details

```
TypeError: checkoutPage.enterCheckoutInformation is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - generic [ref=e14]: "3"
      - generic [ref=e16]: "Checkout: Your Information"
    - generic [ref=e19]:
      - generic [ref=e20]:
        - textbox "First Name" [ref=e22]
        - textbox "Last Name" [ref=e24]
        - textbox "Zip/Postal Code" [ref=e26]
      - generic [ref=e28]:
        - button "Go back Cancel" [ref=e29] [cursor=pointer]:
          - img "Go back" [ref=e30]
          - text: Cancel
        - button "Continue" [ref=e31] [cursor=pointer]
  - contentinfo [ref=e32]:
    - list [ref=e33]:
      - listitem [ref=e34]:
        - link "Twitter" [ref=e35] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e36]:
        - link "Facebook" [ref=e37] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e38]:
        - link "LinkedIn" [ref=e39] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e40]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | const { test, expect } = require("../../Fixtures/loginFixture");
  2  | const testData = require("../../utils/testData");
  3  | 
  4  | test("Add product, checkout, complete order and validate success message", async ({
  5  |   page,
  6  |   inventoryPage,
  7  |   cartPage,
  8  |   checkoutPage,
  9  |   checkoutCompletePage,
  10 | }) => {
  11 |   // Add Products
  12 | 
  13 |   await inventoryPage.addItemsToCart(3);
  14 | 
  15 |   // Open Cart
  16 | 
  17 |   await inventoryPage.openCart();
  18 | 
  19 |   // VerifyCart
  20 | 
  21 |   await expect(cartPage.cartItems.first()).toBeVisible();
  22 |   console.log(await cartPage.getCartItems());
  23 | 
  24 |   //Checkout
  25 | 
  26 |   await cartPage.proceedToCheckout();
  27 | 
  28 |   // Fill Checkout information
  29 | 
> 30 |   await checkoutPage.enterCheckoutInformation(
     |                      ^ TypeError: checkoutPage.enterCheckoutInformation is not a function
  31 |     testData.checkoutData.checkout.firstName,
  32 |     testData.checkoutData.checkout.lastName,
  33 |     testData.checkoutData.checkout.postalCode,
  34 |   );
  35 | 
  36 |   // Continue
  37 | 
  38 |   await checkoutPage.continueCheckout();
  39 | 
  40 |   // Finish Order
  41 | 
  42 |   await checkoutPage.finishOrder();
  43 | 
  44 |   // Validation
  45 | 
  46 |   await expect(page).toHaveURL(/checkout-complete.html/);
  47 | 
  48 |   console.log(await checkoutCompletePage.getOrderHeader());
  49 | 
  50 |   await expect(checkoutCompletePage.orderHeader).toContainText(
  51 |     "Thank you for your order!");
  52 | 
  53 |   console.log(await checkoutCompletePage.getConfirmationMessage());
  54 | 
  55 |   await expect(checkoutCompletePage.confirmationMessage).toContainText(
  56 |     "Your order has been dispatched");
  57 | 
  58 |   console.log("******* Order Completed Successfully **************");
  59 | });
  60 | 
```