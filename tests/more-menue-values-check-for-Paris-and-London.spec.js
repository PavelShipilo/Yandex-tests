let geoPage = require('../page-objects/geo-location');
let mainPage = require('../page-objects/main-page');
let moreValuesForLondon = [];
let moreValuesForParis = [];

describe('Main page yandex tests', function() {
    it('Compare "More" menue elements to be equal in case of different geolocations selected', async function() {
      await mainPage.openMainPage();
      await mainPage.openGeolocationPage();
      await geoPage.changeGeolocation('Лондон');
      await mainPage.saveMoreMenueElements(moreValuesForLondon);
      await mainPage.openGeolocationPage();
      await geoPage.changeGeolocation('Париж');
      await mainPage.saveMoreMenueElements(moreValuesForParis);
      await mainPage.compareMoreMenueValues(moreValuesForLondon, moreValuesForParis);

    });
  });
  