const mainPage = function() {
    let EC = protractor.ExpectedConditions;
    let mainPageUrl = 'https://yandex.by/';
    let mainPageIsOpened = EC.urlIs(mainPageUrl);
    const geoButton = element(by.css('.geolink__reg'));
    const moreButton = element(by.css('[data-statlog="tabs.more"]'));
   
    this.openMainPage = async function() {
        await browser.get('https://yandex.by/');
    };
    this.saveMoreMenueElements = async function(array) {
        array = element.all(by.css('home-tabs__more')).clone;
    };
    this.compareMoreMenueValues = async function(array1, array2) {
        expect(array1).toEqual(array2);
    };
    this.openGeolocationPage = async function() {
        browser.wait(mainPageIsOpened, 5000);
        await geoButton.click();
    };
};
module.exports = new mainPage();
