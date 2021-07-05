const Waiters = require('../../waiters')

class geoPage {
    constructor () {
        this.waiters = new Waiters(); 
        this.searchField = by.id('city__front-input');
        this.searchFieldDropdown = by.css('.popup__items');
        this.searchFieldDropdownFrstEl = by.css('ul:first-child');
    }   
        async changeGeolocation(city) {
            this.waiters.elementIsClickable(element(this.searchField));        
            await element(this.searchField).clear();
            await element(this.searchField).sendKeys(city);
            this.waiters.elementIsVisible(element(this.searchFieldDropdownFrstEl));
            await element(this.searchFieldDropdownFrstEl).click();         
        }
    }
module.exports = geoPage;
