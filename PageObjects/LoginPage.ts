import { ChainablePromiseElement } from 'webdriverio';

class LoginPage {
    public get inputUsername(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#user-name');
    }

    public get inputPassword(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#password');
    }

    public get btnLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#login-button');
    }

    public async login(username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

export default new LoginPage();