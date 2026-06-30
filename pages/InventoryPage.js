class InventoryPage {


    constructor(page){

    this.page = page;

    this.logo = page.locator('.app_logo');
    this.inventoryList = page.locator('.inventory_list');
    this.sortDropdown=page.locator('[data-test="product-sort-container"]');
    this.productNames = page.locator('.inventory_item_name');
    this.productPrices = page.locator('.inventory_item_price');
    this.addToCartButtons = page.locator('button[data-test^="add-to-cart"]');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartItems = page.locator('.cart_item');
    this.addToCartButtons = page.locator('button[data-test^="add-to-cart"]');
    this.cartIcon = page.locator('.shopping_cart_link');

    }

async getProductCount(){

        return await this.productNames.count();
}

async getAllProducts(){

    return await this.productNames.allTextContents();
}

async sortProducts(sortValue){

await this.sortDropdown.selectOption(sortValue);    
}


async getProductNames(){

    return await this.productNames.allTextContents();
}

async getProductPrices(){

    return await this.productPrices.allTextContents();
}

async addItemsToCart(count){

    for(let i=0;i<count;i++){
        await this.addToCartButtons.nth(i).click();
    }

}

async openCart(){

await this.cartIcon.click();

}

async getCartItems(){

    return await this.cartItems.allTextContents();  
}

async addItemsToCart(count){

    for(let i=0;i<count;i++){
        await this.addToCartButtons.nth(i).click();
    }
}

async openCart(){

    await this.cartIcon.click();
}

}

module.exports = { InventoryPage };