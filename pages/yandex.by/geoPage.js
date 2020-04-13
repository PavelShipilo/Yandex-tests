let waiters = require('../waiters')

const geoPage = function() { 
    let searchField = element(by.id('city__front-input'));
    let searchFieldDropdown = element(by.css('.popup__items'));
    let searchFieldDropdownFrstEl = element(by.css('ul:first-child'));
            
    this.changeGeolocation = async function(city) {
        waiters.elementIsClickable(searchField);        
        await searchField.clear();
        await searchField.sendKeys(city);
        waiters.elementIsVisible(searchFieldDropdownFrstEl);
        await searchFieldDropdownFrstEl.click();         
    };
};
module.exports = new geoPage();
