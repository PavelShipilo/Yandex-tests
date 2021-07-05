const MarketMainPage = require('../../pages/market.yandex.by/mainPage/marketMainPage');
const ComputersPage = require('../../pages/market.yandex.by/mainPage/computers/computersPage');
const CatalogPage = require('../../pages/market.yandex.by/catalog/catalogPage');
const Waiters = require('../../pages/waiters');

describe('catalog', function () {

    const marketMainPage = new MarketMainPage();
    const computersPage = new ComputersPage();
    const catalogPage = new CatalogPage();
    const waiters = new Waiters();

it('if the number of products is set from the dropdown, then the appropriate number of products is displayed on the page', async function () {
    await marketMainPage.openMainPage();
    await marketMainPage.openComputersTab();
    await computersPage.openPlanshetyTab();
    expect(catalogPage.allProductTitles).toBeArrayOfSize(48);
    await browser.actions().mouseMove(element(catalogPage.numberOfProductsToDisplay)).perform();
    await catalogPage.setNumberOfProductsToDisplay(catalogPage.twelveProductsToDisplayElement);
    expect(catalogPage.allProductTitles).toBeArrayOfSize(12);
    await catalogPage.setNumberOfProductsToDisplay(catalogPage.fortyEightProductsToDisplayElement);
});
});
