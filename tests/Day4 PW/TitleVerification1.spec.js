const { test, expect } = require('@playwright/test');
const { LoginPage, GenericPage } = require('../../pages/GenericPage');
const testData = require('../../utils/testData');

test.describe('Page Title Verification', () => {

    let genericPage;

    test.beforeEach(async ({ page }) => {

        genericPage = new GenericPage(page);
    });

    test('Launch Google and verify title', async ({ page }) => {
        await genericPage.navigate(testData.googleUrl);

        const pageTitle = await genericPage.getTitle();
        console.log('Google Page Title: ', pageTitle);

        await expect(page).toHaveTitle(testData.googleTitle);

    });


    test('Launch a4 and verify title', async ({ page }) => {
        await genericPage.navigate(testData.afourUrl);

        const pageTitle = await genericPage.getTitle();
        console.log('A4 Page Title', pageTitle);
        await expect(page).toHaveTitle(testData.afourTitle);
    });


});

