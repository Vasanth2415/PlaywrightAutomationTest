
const {GenericPage} = require('./GenericPage');
class LoginPage extends GenericPage {

    constructor(page) {

        super(page);

        //Locators

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async login(Username, Password) {

        await this.usernameInput.fill(Username);
        await this.passwordInput.fill(Password);
        await this.loginButton.click();
    }


    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }

    async getUsernamePlaceholder() {
        return await this.usernameInput.getAttribute('placeholder');

    }

    async getPasswordPlaceholder() {
        
            return await this.passwordInput.getAttribute('placeholder');
        }

    async getLoginButtonValue(){

            return await this.loginButton.getAttribute('value');
        }

    
}

module.exports = { LoginPage };