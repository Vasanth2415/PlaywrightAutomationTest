const { test, expect } = require('../../fixtures/loginFixture');


test.describe('SauceDemo Authenticated User Tests', () => {

    // Valid Login Test
    test('Valid Login', async ({ loggedInPage }) => {


        await expect(loggedInPage).toHaveURL('https://www.saucedemo.com/inventory.html');
        console.log(await loggedInPage.url());
    });


});