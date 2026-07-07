const { test: base, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { InventoryPage } = require("../pages/InventoryPage");
const { CartPage } = require("../pages/CartPage");
const { CheckoutPage } = require("../pages/CheckoutPage");
const { CheckoutCompletePage } = require("../pages/CheckoutCompletePage");
const testData = require("../utils/testData");

const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    
    const loginPage = new LoginPage(page);

    // Navigate to application
    await loginPage.navigate(testData.url);

    // Login
    await loginPage.login(
      testData.loginData.validUser.username,
      testData.loginData.validUser.password,
    );

    await expect(page).toHaveURL(/inventory/);

    // Give the logged-in page to the test
    
    await use(page);

    // Optional cleanup
    // await page.close();
  },

  inventoryPage: async ({ authenticatedPage  }, use) => {
    const inventoryPage = new InventoryPage(authenticatedPage);
    await use(inventoryPage);
  },

  cartPage: async ({ authenticatedPage }, use) => {
    await use(new CartPage(authenticatedPage));
  },

  checkoutPage: async ({ authenticatedPage }, use) => {
    await use(new CheckoutPage(authenticatedPage));
  },

  checkoutCompletePage: async ({ authenticatedPage }, use) => {
    await use(new CheckoutCompletePage(authenticatedPage));
  },
});

module.exports = { test, expect };
