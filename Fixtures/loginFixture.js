const { test: base, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../utils/testData');

const test = base.extend({

    loggedInPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        // Navigate to application
        await loginPage.navigate(testData.url);

        // Login
        await loginPage.login(
            testData.Username,
            testData.Password
        );

        // Give the logged-in page to the test
        await use(page);

        // Optional cleanup
        // await page.close();
    }

});

module.exports = {test,expect};