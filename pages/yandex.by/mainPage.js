let waiters = require('../waiters')

class mainPage {  
    constructor () { 
        this.moreButton = by.css('[data-statlog="tabs.more"]');
        this.moreDropdown = element.all(by.css('.popup2 .home-tabs__more'));
        this.geoButton = by.css('.geolink__reg');      
        this.mainPageUrl = 'https://yandex.by/';
    }
        async openMainPage() {
            await browser.get(this.mainPageUrl);
        }

        async saveMoreMenuElements(array) {
            array = element(this.moreDropdown).clone;
        }

        async openGeolocationPage() {       
            waiters.elementIsClickable(element(this.geoButton));
            await element(this.geoButton).click();        
        }
    }
module.exports = mainPage;
