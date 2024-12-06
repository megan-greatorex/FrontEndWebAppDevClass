describe('favoriteItem', function () {

  var favoriteItem;
  var $httpBackend;
  var BasePath;

  beforeEach(function () {
    module('public');

    menuItem = "a5";
    shortName = "A";
    item = 5;

    inject(function ($injector) {
      favoriteItem = $injector.get('PublicService');
      $httpBackend = $injector.get('$httpBackend');
      BasePath = $injector.get('BasePath');
    });
  });

  it('should return favorite item', function() {
    $httpBackend.whenGET(BasePath + '/menu_items/' + shortName + '/menu_items/' + item + '.json').respond({"description":"chicken soup with egg drop and won tons","large_portion_name":"quart","name":"Egg Drop with Won Ton Soup","price_large":6,"price_small":3,"short_name":"A5","small_portion_name":"pint"});
    favoriteItem.getFavoriteItem(menuItem)
      .then(function(response) {
        expect(response.data).toEqual({"description":"chicken soup with egg drop and won tons","large_portion_name":"quart","name":"Egg Drop with Won Ton Soup","price_large":6,"price_small":3,"short_name":"A5","small_portion_name":"pint"});
      });
    $httpBackend.flush();
  });

});