(function () {
'use strict';

angular.module('MenuApp').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    // Home page
    .state('home', {
        url: '/',
        templateUrl: 'src/menu/templates/home.template.html'
    })

    // Category List page
    .state('categories', {
        url: '/categories',
        templateUrl: 'src/menu/templates/main-categories.template.html',
        controller: 'CategoryListController as categoryList',
        resolve: {
            items: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })

    // Item List page
    .state('items', {
        url: '/items/{itemShortName}',
        templateUrl: 'src/menu/templates/main-items.template.html',
        controller: 'ItemListController as items',
        resolve: {
            item: ['$stateParams', 'MenuDataService',
                function ($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.itemShortName);
                }]
        }
    });
}

})();