const { test, expect } = require("../../Fixtures/genericPageFixture");

const testData = require("../../utils/testData");

test.describe("Page Title Verification", () => {

  test("Launch Google and verify Title", async ({ genericPage }) => {

     await genericPage.navigate(testData.googleUrl);

    const pageTitle = await genericPage.getTitle();

    console.log("Google Page Title: ", pageTitle);

    await expect(genericPage.page).toHaveTitle(testData.googleTitle);
  });
});
