const Waiters = require('../../waiters')

class CatalogPage {
    constructor() {
        this.waiters = new Waiters();
        this.appleManufacturer = by.css('a[href="/catalog--planshety-v-vitebske/54545/list?hid=6427100&glfilter=7893318%3A153043"]');
        this.allProductTitles = element.all(by.css('.n-snippet-card2__title')).all(by.css('a'));
        this.ProductTitleForSearch = by.css('.n-snippet-list .n-snippet-card2:nth-child(1) .n-snippet-card2__title a');
        this.allProductsDescription = element.all(by.css('li.n-snippet-card2__desc-item:nth-child(4)'));
        this.numberOfProductsToDisplay = by.css('button[role="listbox"]');
        this.fortyEightProductsToDisplayElement = by.css('div.select__item:nth-child(2)');
        this.twelveProductsToDisplayElement = by.css('div.select__item:first-child');
        this.findWithLteRadiobutton = by.css('input[id="7951055_1"] + div');
        this.catalogTitle = by.css('h1.title');   
        this.searchInput = by.id("header-search");  
        this.submitButton = by.css('button[type="submit"]'); 
        this.sortingByPrice = by.css('div .n-filter-block_pos_left .i-bem:nth-child(3) a');      
    }   

    async selectManufacturer(manufacturer) {
        this.waiters.elementIsClickable(element(manufacturer));
        await element(manufacturer).click();
        this.waiters.elementIsSelected(element(manufacturer));        
    }

    async setNumberOfProductsToDisplay(value) {
        await element(this.numberOfProductsToDisplay).click();
        element(value).click();
    } 

    async selectLteOption(value) {
        this.waiters.elementIsClickable(value);
        await element(value).click();                      
    } 
    
    async searchFirstDisplayedProduct() {
        let productTitle = element(this.ProductTitleForSearch).getText();
        await element(this.searchInput).sendKeys(productTitle);        
        element(this.submitButton).click();
    }    
}    
module.exports = CatalogPage;
