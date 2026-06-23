const {test,expect} = require('@playwright/test');

// Verify the Login Page elements and their placeholders
test("Verify login page elements and placeholders", async({page}) =>{

    await page.goto('https://www.saucedemo.com/');

    const userName = page.locator('#user-name');
    const password = page.locator('#password');
    const loginBtn = page.locator('#login-button');


    console.log('Username Placeholder: ', await userName.getAttribute('placeholder'));
    console.log('Password placeholder: ',await password.getAttribute('placeholder'))
    console.log('Login Button value: ',await loginBtn.getAttribute('value'));

});


