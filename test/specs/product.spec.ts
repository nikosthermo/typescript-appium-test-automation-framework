import { expect } from 'chai';
import LoginPage from '../../PageObjects/LoginPage';
import ProductsPage from '../../PageObjects/ProductsPage';
import * as testData from '../data/testData.json';

describe('Products Page', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login(testData.validUser.username, testData.validUser.password);
    });

    it('should display products', async () => {
        const itemCount = await ProductsPage.getInventoryCount();
        expect(itemCount).to.equal(6);
    });
});
