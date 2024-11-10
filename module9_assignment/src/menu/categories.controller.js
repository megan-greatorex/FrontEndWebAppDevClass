(function () {
'use strict';

angular.module('MenuApp')
    .controller('CategoryListController', CategoryListController);

CategoryListController.$inject = ['MenuDataService', 'items'];
function CategoryListController(MenuDataService, items) {
    var categoryList = this;
    categoryList.items = items.data;
}

})();