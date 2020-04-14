let marketMainPage = require('../../pages/market.yandex.by/mainPage/marketMainPage');
let computersPage = require('../../pages/market.yandex.by/mainPage/computers/computersPage');
let catalogPage = require('../../pages/market.yandex.by/catalog/catalogPage');

describe('каталог товаров', function () {
    it('если задано количество товаров для отображения на странице в выпадающем меню, то фактически на странице отображается соответствующее количество ', async function () {
    await marketMainPage.openMainPage();
    await marketMainPage.openComputersTab();
    await computersPage.openPlanshetyTab();
    await catalogPage.setNumberOfProductsToDisplay(catalogPage.fortyEightProductsToDisplayElement);
    expect(catalogPage.allProductTitles).toBeArrayOfSize(48);
    await catalogPage.setNumberOfProductsToDisplay(catalogPage.twelveProductsToDisplayElement);
    expect(catalogPage.allProductTitles).toBeArrayOfSize(12);
    });
});
