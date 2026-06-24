const { test, expect } = require('@playwright/test');

test("Verify the Inventory after login", async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // Login to the application
    const userName = page.locator('#user-name');
    const password = page.locator('#password');
    const loginBtn = page.locator('#login-button');

    await userName.fill('standard_user');
    await password.fill('secret_sauce');
    await loginBtn.click();

    // Verify the Page Title and URL after login
    const title = await page.title();
    console.log('Page Title: ', title);
    await expect(page).toHaveTitle('Swag Labs');

    const Url = await page.url();
    console.log('Page URL: ', Url);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


    //Verify the Logo is visible on the page

    const logo = page.locator('.app_logo');
    await expect(logo).toBeVisible();
    const isLogoVisible = await logo.isVisible();
    console.log('Logo Visibility is:', isLogoVisible);

    //await expect(page.locator('.app_logo')).toBeVisible();
    //console.log('Logo Visibility is: ', await page.locator('.app_logo').isVisible());


    // Verify the Inventory Items are visible on the page

    const inventory = page.locator('.inventory_list');
    const isVisible = await inventory.isVisible();
    console.log('Inventory Visibility is: ', isVisible);
    await expect(inventory).toBeVisible();
    

    // Verify atleast 6 inventory items are present on the page
    const productNames = page.locator('.inventory_item_name');
    const count = await productNames.count();

    /*for(let i =0; i< count; i++){
       console.log(await productNames.nth(i).textContent());
    }*/

    console.log("Number of Product Names: ", count);
    await expect(productNames).toHaveCount(6);
    console.log("Product Names: ", await productNames.allTextContents());

});