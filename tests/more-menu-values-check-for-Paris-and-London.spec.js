let geoPage = require('../pages/geoPage');
let mainPage = require('../pages/mainPage');

describe('Main page yandex tests', function() {
    it('Compare "More" menu elements to be equal in case of different geolocations selected', async function() {
      let moreValuesForLondon = [];
      let moreValuesForParis = [];

      await mainPage.openMainPage();
      await mainPage.openGeolocationPage();
      await geoPage.changeGeolocation('Лондон');
      await mainPage.saveMoreMenuElements(moreValuesForLondon);
      await mainPage.openGeolocationPage();
      await geoPage.changeGeolocation('Париж');
      await mainPage.saveMoreMenuElements(moreValuesForParis);
      await expect(moreValuesForLondon).toEqual(moreValuesForParis);
    });
  });
