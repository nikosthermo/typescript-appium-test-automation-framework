import { expect } from 'chai';
import LoginPage from '../../PageObjects/LoginPage';
import * as testData from '../data/testData.json';

describe('Authentication', () => {
    it('should log in with valid credentials', async () => {
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login(testData.validUser.username, testData.validUser.password);

        const inventoryList = await $('.inventory_list');
        expect(await inventoryList.isDisplayed()).to.be.true;
    });

    it('should fail to log in with invalid credentials', async () => {
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login(testData.invalidUser.username, testData.invalidUser.password);

        const errorMessage = await $('.error-message-container');
        expect(await errorMessage.isDisplayed()).to.be.true;
    });
});
