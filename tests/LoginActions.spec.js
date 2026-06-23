const {test,expect} = require('@playwright/test');
const { clear } = require('node:console');

test.describe('SauceDemo Login Functionality', () => {
    
test.beforeEach(async ({page}) =>{
await page.goto('https://www.saucedemo.com/');
});

// Valid Login Test
test('Valid Login', async ({page})=> {

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log(await page.url());
})

    // Invalid Login Test
    test ('Invalid Login', async ({page}) => {

        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret');
        await page.locator('#login-button').click();

        const errorMessage = page.locator('[data-test="error"]');

        await expect(errorMessage).toBeVisible();
        const errorText = await errorMessage.textContent();
        console.log('Error Message: ',errorText);

      
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
        console.log(errorMessage);
    });
});