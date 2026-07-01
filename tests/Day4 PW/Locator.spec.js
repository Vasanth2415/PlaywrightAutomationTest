const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../../pages/LoginPage");
const testData = require("../../utils/testData");

test("Verify login page elements and placeholders", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate(testData.url);

  const usernamePlaceholder = await loginPage.getUsernamePlaceholder();
  const passwordPlaceholder = await loginPage.getPasswordPlaceholder();
  const loginButtonValue = await loginPage.getLoginButtonValue();

  console.log("Username placeholder: ", usernamePlaceholder);
  console.log("Password Placeholder: ", passwordPlaceholder);
  console.log("Login button Value: ", loginButtonValue);

  await expect(loginPage.usernameInput).toHaveAttribute(
    "placeholder",
    "Username",
  );

  await expect(loginPage.passwordInput).toHaveAttribute(
    "placeholder",
    "Password",
  );

  await expect(loginPage.loginButton).toHaveAttribute("value", "Login");
});
