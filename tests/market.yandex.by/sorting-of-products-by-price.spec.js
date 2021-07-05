const MarketMainPage = require('../../pages/market.yandex.by/mainPage/marketMainPage');
const ComputersPage = require('../../pages/market.yandex.by/mainPage/computers/computersPage');
const CatalogPage = require('../../pages/market.yandex.by/catalog/catalogPage');

describe('catalog', function() {

    const marketMainPage = new MarketMainPage();
    const computersPage = new ComputersPage();
    const catalogPage = new CatalogPage();
    
it('if products are sorted by price they are displayed in correct order', async function() {

    await marketMainPage.openMainPage();
    await marketMainPage.openComputersTab();
    await computersPage.openPlanshetyTab();     
    await element(catalogPage.sortingByPrice).click();
    expect(browser.getCurrentUrl()).toContain('aprice');
    await element(catalogPage.sortingByPrice).click();
    expect(browser.getCurrentUrl()).toContain('dprice');    
});
});
