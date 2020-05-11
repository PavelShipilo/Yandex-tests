class Waiters {
    constructor () {   
        this.EC = protractor.ExpectedConditions;
    }
        pageIsOpened(pageUrl) {
            browser.wait(this.EC.urlIs(pageUrl), 1000);
        }

        elementIsClickable(value) {
            browser.wait(this.EC.elementToBeClickable(element(value)), 1000);
        }

        elementIsVisible(value) {
            browser.wait(this.EC.visibilityOf(element(value)), 1000);
        }

        elementIsSelected(value) {
            browser.wait(this.EC.elementToBeSelected(element(value)), 1000);
        }

        async catalogTitleIsDisplayed(title,maxTimeToWait) { //maxTimeToWait - максимальное время ожидания в мс
            let enabled;
            let timePassed = 0;
            //let elementLocator;
                                
            while(!enabled && timePassed < maxTimeToWait) {
                enabled = element(by.cssContainingText('h1.title', `${title}`)).isPresent();
                //enabled = await elementLocator.isEnabled();
                timePassed += 1000;
                await browser.sleep(1000);
            } 
            console.log(enabled);
        }

    }
module.exports = Waiters;
