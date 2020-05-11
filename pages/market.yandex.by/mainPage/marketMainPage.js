const Waiters = require('../../waiters')

class MarketMainPage {
    constructor() {
        this.waiters = new Waiters();
        this.computersTab = by.css('a[href="/catalog--kompiuternaia-tekhnika/54425"]');
        this.mainPageUrl = 'https://market.yandex.by/';
    }

    async openMainPage() {  
        await browser.get(this.mainPageUrl);
    }

    async openComputersTab() {
        this.waiters.elementIsVisible(this.computersTab);
        await element(this.computersTab).click();
    }
}
module.exports = MarketMainPage;
