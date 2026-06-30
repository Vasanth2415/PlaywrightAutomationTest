const { test: base, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { InventoryPage } = require("../pages/InventoryPage");
const { CartPage } = require("../pages/CartPage");
const { CheckoutPage } = require("../pages/CheckoutPage");
const { CheckoutCompletePage } = require("../pages/CheckoutCompletePage");

const testData = require("../utils/testData");

const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    // Navigate to application
    await loginPage.navigate(testData.url);

    // Login
    await loginPage.login(testData.Username, testData.Password);

    // Give the logged-in page to the test
    await use(page);

    // Optional cleanup
    // await page.close();
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new checkoutPage(page));
  },

  checkoutCompletePage: async({page},use) =>{
await use(new CheckoutCompletePage(page));
  }
  
});

module.exports = { test, expect };
