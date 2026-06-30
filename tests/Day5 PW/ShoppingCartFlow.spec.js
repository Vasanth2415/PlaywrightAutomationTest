const { test, expect } = require('@playwright/test');

test("Verify the Sort products, add items to cart, and verify cart contents", async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // Login to the application
    const userName = page.locator('#user-name');
    const password = page.locator('#password');
    const loginBtn = page.locator('#login-button');

    await userName.fill('standard_user');
    await password.fill('secret_sauce');
    await loginBtn.click();

    // Sort Products by Price (low to high)
    const sortDropdown = page.locator('[data-test="product-sort-container"]');
    await sortDropdown.selectOption('lohi');
    await expect(sortDropdown).toHaveValue('lohi');

    const productNames = page.locator('.inventory_item_name');

    const productPrices = page.locator('.inventory_item_price');

    // Display product name and price
    const names = await productNames.allTextContents();
    const pricesText = await productPrices.allTextContents();

    console.log('Products sorted by Price (low to high):');

    for (let i = 0; i < names.length; i++) {

        console.log(`${names[i]}-  ${pricesText[i]}`);
    }


    // Convert the price from $7.99 to 7.99
    const prices = pricesText.map(price => Number(price.replace('$', ''))
    );

    console.log('Price Values: ', prices);

    // Sort the prices in ascending order
    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);



    // Sort products by name (A to Z)

    const sortDropdown2 = page.locator('[data-test="product-sort-container"]');

    await sortDropdown2.selectOption('az');
    await expect(sortDropdown2).toHaveValue('az');

    const products = page.locator('.inventory_item_name');
    const count = await products.count();

    const actualProducts = [];

    for (let i = 0; i < count; i++) {
        actualProducts.push(await products.nth(i).textContent());
    }

    console.log('Sorted Products A to Z :', actualProducts);

    const expectedOrder = [...actualProducts].sort((a, b) => a.localeCompare(b));

    expect(actualProducts).toEqual(expectedOrder);



    // Add 2 items to the cart

    const addToCartButtons = page.locator('button[data-test^="add-to-cart"]');

    await addToCartButtons.nth(0).click();
    await addToCartButtons.nth(1).click();



    // Verify the items in the cart
    const cartIcon = page.locator('.shopping_cart_link');
    await cartIcon.click();

    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(2);
    await expect(cartItems.first()).toBeVisible();

    console.log('Items in the Cart: ', await cartItems.allTextContents());
    console.log('*******************');

});