import { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';

class ProductsPage {
    public get inventoryItems(): ChainablePromiseArray<WebdriverIO.ElementArray> {
        return $$('div.inventory_item');
    }

    public get firstInventoryItem(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('.inventory_item button');
    }

    public async addItemToCart(): Promise<void> {
        await this.firstInventoryItem.click();
    }

    public async getInventoryCount(): Promise<number> {
        const items = await this.inventoryItems;
        return items.length;
    }
}

export default new ProductsPage();