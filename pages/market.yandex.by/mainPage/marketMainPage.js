let waiters = require('../../waiters')

const marketMainPage = function() {   
    const computersTab = element(by.css('a[href="/catalog--kompiuternaia-tekhnika/54425"]'));    
    
    let mainPageUrl = 'https://market.yandex.by/';
    
    this.openMainPage = async function() {
        await browser.get(mainPageUrl);        
    };

    this.openComputersTab = async function() {
        waiters.elementIsVisible(computersTab);
        await computersTab.click();
    };
};
module.exports = new marketMainPage();
