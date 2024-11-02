(function () {
    'use strict';

angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems)
    .constant('BasePath', "https://coursera-jhu-default-rtdb.firebaseio.com");

function FoundItems() {
    var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
            found: '<',
            onRemove: '&'
        },
        controller: NarrowItDownController,
        controllerAs: 'narrow',
        bindToController: true
    };
    
    return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrow = this;

    narrow.getItems = function (searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
        promise.then(function (response) {
            narrow.found = response;
        })
        .catch(function (error) {
            console.log(error);
        })
    };

    narrow.removeItem = function (itemIndex) {
        narrow.found.splice(itemIndex, 1);
    };

}

MenuSearchService.$inject = ['$http', 'BasePath'];
function MenuSearchService($http, BasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
        return $http({
            method: "GET",
            url: (BasePath + "/menu_items.json")
        }).then(function (result){
            var allMenuItems = result.data;
            var found = [];
            if(searchTerm === ""){
                return found;
            }
            else{
                for (var menuItem in allMenuItems){
                    for (var i = 0; i < allMenuItems[menuItem].menu_items.length; i++) {
                        var item = allMenuItems[menuItem].menu_items[i];
                        if(item.description.includes(searchTerm)){
                            found.push(item);
                        }
                    }
                }
                return found;
            }
        });
    }
    
}

})();