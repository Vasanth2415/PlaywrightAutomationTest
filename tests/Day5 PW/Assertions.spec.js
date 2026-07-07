
const { test, expect } = require("../../Fixtures/loginFixture");


test("Verify Inventory after Login", async ({ authenticatedPage, page, inventoryPage }) => {

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(page).toHaveTitle("Swag Labs");

  await expect(inventoryPage.logo).toBeVisible();

  await expect(inventoryPage.inventoryList).toBeVisible();

  await expect(inventoryPage.productNames).toHaveCount(6);

  console.log(await inventoryPage.getAllProducts());
});
