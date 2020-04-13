let waiters = require('../waiters')

const mainPage = function() {   
    const moreButton = element(by.css('[data-statlog="tabs.more"]'));
    const moreDropdown = element.all(by.css('.popup2 .home-tabs__more'));
    const geoButton = element(by.css('.geolink__reg'));

    let mainPageUrl = 'https://yandex.by/';

    this.openMainPage = async function() {
        await browser.get(mainPageUrl);
    };

    this.saveMoreMenuElements = async function(array) {
        array = moreDropdown.clone;
    };

    this.openGeolocationPage = async function() {       
        waiters.elementIsClickable(geoButton);
        await geoButton.click();        
    };
};
module.exports = new mainPage();
