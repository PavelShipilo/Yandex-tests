const MarketMainPage = require('../../pages/market.yandex.by/mainPage/marketMainPage');
const ComputersPage = require('../../pages/market.yandex.by/mainPage/computers/computersPage');
const CatalogPage = require('../../pages/market.yandex.by/catalog/catalogPage');

describe('catalog', function() {

    const marketMainPage = new MarketMainPage();
    const computersPage = new ComputersPage();
    const catalogPage = new CatalogPage();
    
    it('if manufacturers filter is selected, then products are displayed due to the filter', async function() {  

    await marketMainPage.openMainPage();
    await marketMainPage.openComputersTab();
    await computersPage.openPlanshetyTab();    
    await catalogPage.selectManufacturer(catalogPage.appleManufacturer);
    catalogPage.allProductTitles.each(function(element, index) {
    expect(element.getText()).toContain('Apple');      
    });
});
});
