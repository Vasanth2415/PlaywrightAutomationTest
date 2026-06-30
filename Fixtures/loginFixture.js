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
    await loginPage.login(testData.username, testData.password);

    // Give the logged-in page to the test
    console.log("Logged in:", page.url());
    await use(loginPage); // old vaue is page

    // Optional cleanup
    // await page.close();
  },

  inventoryPage: async ({ page, loggedInPage }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },

  cartPage: async ({ page, loggedInPage }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page, loggedInPage }, use) => {
    await use(new CheckoutPage(page));
  },

  checkoutCompletePage: async ({ page, loggedInPage }, use) => {
    await use(new CheckoutCompletePage(page));
  },
});

module.exports = { test, expect };
