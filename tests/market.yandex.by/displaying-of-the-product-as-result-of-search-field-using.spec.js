let MarketMainPage = require('../../pages/market.yandex.by/mainPage/marketMainPage');
let ComputersPage = require('../../pages/market.yandex.by/mainPage/computers/computersPage');
let CatalogPage = require('../../pages/market.yandex.by/catalog/catalogPage');
let Waiters = require('../../pages/waiters');

describe('catalog', function() {

    const marketMainPage = new MarketMainPage();
    const computersPage = new ComputersPage();
    const catalogPage = new CatalogPage();
    const waiters = new Waiters();
    
    it('if search result is successful, then the searched product is displayed on the page and in the search field', async function() {  

    await marketMainPage.openMainPage();
    await marketMainPage.openComputersTab();
    await computersPage.openPlanshetyTab(); 
    await catalogPage.searchFirstDisplayedProduct();
    expect(element(catalogPage.ProductTitleForSearch).getText()).toBe(element(catalogPage.searchInput).getAttribute('value'));
});
});
