(function () {
'use strict';

angular.module('data').service('MenuDataService', MenuDataService).constant('BasePath', "https://coursera-jhu-default-rtdb.firebaseio.com");

MenuDataService.$inject = ['$http', 'BasePath'];
function MenuDataService($http, BasePath) {
    var service = this;

    service.getAllCategories = function () {
        var response = $http({
            method: "GET",
            url: (BasePath + "/categories.json")
        })
        return response;
    }

    service.getItemsForCategory = function (categoryShortName) {
        var categoryUrl = BasePath + "/menu_items/" + categoryShortName + ".json";
        var response = $http({
            method: "GET",
            url: categoryUrl
        });
        return response;
    }

}
    
})();