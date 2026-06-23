const {test,expect} = require ('@playwright/test');

// Launch Google page and verify the title
test("Launch Google and verify title", async({page}) => {

await page.goto('https://www.google.com/')

const pageTitle = await page.title();

console.log('Page Title is: ', pageTitle);

await expect(page).toHaveTitle('Google');

});


// Launch A4 page and verify the title
test("Launch A4 Page and Get Title", async({page}) => {

    await page.goto('https://afourtech.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Software Development Company | Reliability Engineering');
});
