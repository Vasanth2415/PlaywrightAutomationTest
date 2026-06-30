const { InventoryPage } = require("../../pages/InventoryPage");
const { test, expect } = require("../../Fixtures/loginFixture");

test("Verify the Sort products, add items to cart,and verify cart contents", 
  async ({page,inventoryPage}) => {

  //Sort by price (Low to High)

  await inventoryPage.sortProducts('lohi');
  await expect(inventoryPage.sortDropdown).toHaveValue('lohi');

  const productNames = await inventoryPage.getProductNames();
  const productPrices = await inventoryPage.getProductPrices();

  console.log("Products sorted by Price (Low to High)");

  for (let i = 0; i < productNames.length; i++) {
    console.log(`${productNames[i]} -${productPrices[i]}`);
  }

  const prices = productPrices.map((price) => Number(price.replace("$", " ")));

  const sortedPrices = [...prices].sort((a, b) => a - b);

  expect(prices).toEqual(sortedPrices);

  // Sort by name (A-Z)

  await inventoryPage.sortProducts("az");

  await expect(inventoryPage.sortDropdown).toHaveValue("az");

  const actualProducts = await inventoryPage.getProductNames();

  console.log("Products Sorted A-Z");

  console.log(actualProducts);

  const expectedProducts = [...actualProducts].sort((a, b) =>
    a.localeCompare(b),
  );

  expect(actualProducts).toEqual(expectedProducts);

  // Add two items

  await inventoryPage.addItemsToCart(2);

  // Open Cart

  await inventoryPage.openCart();

  // Verify Cart

  await expect(inventoryPage.cartItems).toHaveCount(2);

  await expect(inventoryPage.cartItems.first()).toBeVisible();

  console.log(await inventoryPage.getCartItems());
});
