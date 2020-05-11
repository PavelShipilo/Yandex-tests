const Waiters = require('../../../waiters')

class ComputersPage {
    constructor () {
        this.waiters = new Waiters();
        this.planshetyTab = (by.css('a[href*="/catalog--planshety"]')); 
    }
    async openPlanshetyTab() {
        this.waiters.elementIsVisible(this.planshetyTab);
        await element(this.planshetyTab).click();
    }    
}
module.exports = ComputersPage;
