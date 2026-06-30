const { InventoryPage } = require('../../pages/InventoryPage');
const {test,expect} = require('../../Fixtures/loginFixture');
 const testData = require('../../utils/testData');


 test('Verify Inventory after Login', async({page,inventoryPage}) =>{

await expect(page).toHaveTitle('Swag Labs');

await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

await expect(inventoryPage.logo).toBeVisible();

await expect(inventoryPage.inventoryList).toBeVisible();

await expect(inventoryPage.productNames).toHaveCount(6);


console.log(await inventoryPage.getAllProducts());

});