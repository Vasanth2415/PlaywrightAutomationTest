const { test: base, expect } = require("@playwright/test");
const { GenericPage } = require("../pages/GenericPage.js");

const test = base.extend({
  genericPage: async ({ page }, use) => {
    const genericPage = new GenericPage(page);

    await use(genericPage);
  },
});

module.exports = { test, expect };
