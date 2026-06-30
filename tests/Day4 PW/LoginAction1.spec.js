const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const testData = require('../../utils/testData');


test.describe('SauceDemo Login Functionality', () => {

    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);

        await loginPage.navigate(testData.url);
    });

    // Valid Login Test
    test('Valid Login', async ({ page }) => {

        await loginPage.login(testData.Username, testData.Password);

         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log(await page.url());
    });

   

    // Invalid Login Test
    test('Invalid Login', async () => {

        await loginPage.login(testData.sername, testData.invalidPassword);

        await expect(loginPage.errorMessage).toBeVisible();

        const errorText = await loginPage.getErrorMessage();
        console.log('Error Message: ', errorText);

        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');


    });

});