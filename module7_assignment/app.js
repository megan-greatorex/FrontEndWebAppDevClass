(function () {
    'use strict';
        
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    

        ToBuyController.$inject = ['ShoppingListCheckOffService'];
        function ToBuyController(ShoppingListCheckOffService) {
            var toBuy = this;

            toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

            toBuy.buyItem = function (itemIndex) {
                console.log("In buy item!");
                console.log(itemIndex);
                ShoppingListCheckOffService.buyItem(itemIndex);
            }

        }

        AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
        function AlreadyBoughtController(ShoppingListCheckOffService) {
            var alreadyBought = this;

            alreadyBought.items = ShoppingListCheckOffService.getItemsBought();

        }

        function ShoppingListCheckOffService() {
            var service = this;

            var itemsToBuy = [{ name: "loaves of bread", quantity: 10 }, { name: "apples", quantity: 10 }, { name: "bananas", quantity: 10 }, { name: "milk cartons", quantity: 10 }, { name: "cookies", quantity: 10 }];
            var itemsBought = [];

            service.getItemsToBuy = function () {
                return itemsToBuy;
            }

            service.getItemsBought = function () {
                return itemsBought;
            }

            service.buyItem = function(itemIndex) {
                console.log("In function!");
                console.log(itemsBought);
                itemsBought.push(itemsToBuy[itemIndex]);
                console.log(itemsBought);
                itemsToBuy.splice(itemIndex, 1);
                return itemsToBuy;
            }
        }
    

})();