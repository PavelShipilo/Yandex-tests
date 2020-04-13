let marketMainPage = require('../../pages/market.yandex.by/mainPage/marketMainPage');
let computersPage = require('../../pages/market.yandex.by/mainPage/computers/computersPage');
let catalogPage = require('../../pages/market.yandex.by/catalog/catalogPage');

describe('каталог товаров', function() {
    it('если выбран фильтр по производителю, то отображены товары согласно выбранному производителю', async function() {  

    await marketMainPage.openMainPage();
    await marketMainPage.openComputersTab();
    await computersPage.openPlanshetyTab();    
    await catalogPage.selectManufacturer(catalogPage.appleManufacturer);
    //await expect(catalogPage.isProductTitleContainText('%Apple%')).toBeTrue(); 
    catalogPage.allProductTitles.each(function(element, index) {
        expect(element.getText()).toContain('Apple');      
    });
});
});
