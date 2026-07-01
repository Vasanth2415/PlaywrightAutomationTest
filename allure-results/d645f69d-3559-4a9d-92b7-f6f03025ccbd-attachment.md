# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day5 PW\Assertions.spec.js >> Verify Inventory after Login
- Location: tests\Day5 PW\Assertions.spec.js:5:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/inventory.html"
Received: "about:blank"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "about:blank"

```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require("../../Fixtures/loginFixture");
  3  | 
  4  | 
  5  | test("Verify Inventory after Login", async ({ page, inventoryPage }) => {
  6  |   
> 7  |   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  8  |   await expect(page).toHaveTitle("Swag Labs");
  9  | 
  10 |   await expect(inventoryPage.logo).toBeVisible();
  11 | 
  12 |   await expect(inventoryPage.inventoryList).toBeVisible();
  13 | 
  14 |   await expect(inventoryPage.productNames).toHaveCount(6);
  15 | 
  16 |   console.log(await inventoryPage.getAllProducts());
  17 | });
  18 | 
```