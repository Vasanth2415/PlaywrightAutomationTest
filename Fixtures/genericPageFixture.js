const { test: base, expect } = require("@playwright/test");
const { GenericPage } = require("../pages/GenericPage.js");

const test = base.extend({
  genericPage: async ({ page }, use) => {
    const genericPage = new GenericPage(page);

     // Navigate to application
      //  await genericPage.navigate(testData.googleUrl);

    await use(genericPage);
  },
});

module.exports = { test, expect };
