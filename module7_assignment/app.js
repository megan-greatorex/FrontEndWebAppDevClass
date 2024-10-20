(function () {
'use strict';
        
angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('calculateTotalPrice', CalculateTotalPriceFilter);
    

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

    toBuy.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', '$scope', 'calculateTotalPriceFilter'];
function AlreadyBoughtController(ShoppingListCheckOffService, $scope, calculateTotalPriceFilter) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getItemsBought();

    $scope.getTotalPrice = function (item) {
        var totalPrice = calculateTotalPriceFilter(item);
        return totalPrice;
    };

}

function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [{ name: "loaves of bread", quantity: 2, pricePerItem: 2 }, { name: "apples", quantity: 4, pricePerItem: 1 }, 
        { name: "bananas", quantity: 6,  pricePerItem: 3 }, { name: "milk cartons", quantity: 3,  pricePerItem: 5 }, 
        { name: "cookies", quantity: 4,  pricePerItem: 15}, { name: "cucumbers", quantity: 5,  pricePerItem: 2}];
    var itemsBought = [];

    service.getItemsToBuy = function () {
        return itemsToBuy;
    }

    service.getItemsBought = function () {
        return itemsBought;
    }

    service.buyItem = function(itemIndex) {
        itemsBought.push(itemsToBuy[itemIndex]);
        itemsToBuy.splice(itemIndex, 1);
        return itemsToBuy;
    }
}

function CalculateTotalPriceFilter(){
    return function (item) {
        var totalPrice = item.quantity * item.pricePerItem;
        return '$$$' + totalPrice.toFixed(2);
    }
}
    

})();