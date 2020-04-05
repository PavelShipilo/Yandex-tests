const waiters = function () {    
    let EC = protractor.ExpectedConditions;

    this.pageIsOpened = function (pageUrl) {
        browser.wait(EC.urlIs(pageUrl), 1000);
    }

    this.elementIsClickable = function (element) {
        browser.wait(EC.elementToBeClickable(element), 1000);
    } 

    this.elementIsVisible = function (element) {
        browser.wait(EC.visibilityOf(element), 1000);
    } 
};
module.exports = new waiters();
