let MarketMainPage = require('../../pages/market.yandex.by/mainPage/marketMainPage');
let ComputersPage = require('../../pages/market.yandex.by/mainPage/computers/computersPage');
let CatalogPage = require('../../pages/market.yandex.by/catalog/catalogPage');
let Waiters = require('../../pages/waiters');

describe('catalog', function() {

    const marketMainPage = new MarketMainPage();
    const computersPage = new ComputersPage();
    const catalogPage = new CatalogPage();
    const waiters = new Waiters();
    
    it('if 4G LTE radiobutton is selected, then products with4G LTE are displayed', async function() {  

    await marketMainPage.openMainPage();
    await marketMainPage.openComputersTab();
    await computersPage.openPlanshetyTab(); 
    await browser.actions().mouseMove(element(catalogPage.findWithLteRadiobutton)).perform();   
    await catalogPage.selectLteOption(catalogPage.findWithLteRadiobutton);
    catalogPage.allProductsDescription.each(function(element, index) {
        expect(element.getText()).toContain('4G');        
    })    
});
});
