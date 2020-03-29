const geoPage = function() {
    let EC = protractor.ExpectedConditions;
    let searchField = element(by.id('city__front-input'));
    let searchFieldIsClickable = EC.elementToBeClickable(searchField);
    this.changeGeolocation = async function(string) {
        browser.wait(searchFieldIsClickable, 5000);        
        await element(by.id('city__front-input')).clear();
        await element(by.id('city__front-input')).sendKeys(string).submit();         
    };
};
module.exports = new geoPage();
