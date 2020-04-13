let geoPage = require('../../pages/yandex.by/geoPage');
let mainPage = require('../../pages/yandex.by/mainPage');

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
