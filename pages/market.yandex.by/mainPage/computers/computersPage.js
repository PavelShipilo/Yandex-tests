let waiters = require('../../../waiters')

const computersPage = function() {
    const planshetyTab = element(by.css('a[href*="/catalog--planshety"]')); 
    
    this.openPlanshetyTab = async function () {
        waiters.elementIsVisible(planshetyTab);
        await planshetyTab.click();
    }
};
module.exports = new computersPage();
