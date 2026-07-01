const { test, expect } = require("../../Fixtures/loginFixture");

test.describe("SauceDemo Authenticated User Tests", () => {
  // Valid Login Test
  test("Valid Login", async ({ authenticatedPage }) => {
    await expect(authenticatedPage).toHaveURL(
      "https://www.saucedemo.com/inventory.html",
    );
    console.log(await authenticatedPage.url());
  });
});
  
