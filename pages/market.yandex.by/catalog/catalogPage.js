let waiters = require('../../waiters')

const catalogPage = function() {   
    this.appleManufacturer = element(by.css('a[href="/catalog--planshety-v-vitebske/54545/list?hid=6427100&glfilter=7893318%3A153043"]'));
    this.allProductTitles = element.all(by.css('.n-snippet-card2__title')).all(by.css('a'));  
    let numberOfProductsToDisplay = element(by.css('button[role="listbox"]'));  
    this.twelveProductsToDisplayElement = element(by.css('option[value="12"]'));
    this.fortyEightProductsToDisplayElement = element(by.css('option[value="48"]'))
                    
    this.selectManufacturer = async function(element) {    
        waiters.elementIsClickable(element);
        await element.click();
        waiters.elementIsSelected(element);        
    };

    this.setNumberOfProductsToDisplay = async function(value) {
        

        await browser.actions().mouseMove(numberOfProductsToDisplay).perform();
        await numberOfProductsToDisplay.click();
        waiters.elementIsVisible(value);
        value.click();        
    };

   /* this.isProductTitleContainText = async function(text) { 
        let allProductTitles = element.all(by.css('.n-snippet-card2__title')).all(by.css('a'));
        allProductTitles.each(function(element, index) {
        expect(element.getText().toEqual(text));
        });      
    };  */          
};
module.exports = new catalogPage();
