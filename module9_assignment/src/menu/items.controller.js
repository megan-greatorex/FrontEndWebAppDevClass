(function () {
'use strict';

angular.module('MenuApp')
    .controller('ItemListController', ItemListController);

ItemListController.$inject = ['MenuDataService', 'item'];
function ItemListController(MenuDataService, item) {
    var items = this;
    items.item = item.data;
}

})();