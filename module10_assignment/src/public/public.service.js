(function () {
    "use strict";
    
    angular.module('public').service('PublicService', PublicService);
    
    PublicService.$inject = ['$http', 'BasePath', '$filter'];
    function PublicService($http, BasePath, $filter) {
        var publicService = this;

        publicService.getFavoriteItem = function (menuItem) {
            let upper = $filter('uppercase')(menuItem);
            let shortName = upper.toString().match("[a-zA-Z]+")[0];
            let item = upper.toString().split(shortName)[1] == "" ? 0 : upper.toString().split(shortName)[1];
            return $http.get(BasePath + '/menu_items/' + shortName + '/menu_items/' + item + '.json')
                .then(function (response) {
                    return response;
            });
        };

        var userInfoDict = {
            infoSaved: false
        };
        publicService.saveUserInfo = function (userInfo) {
            userInfoDict = userInfo;
        };

        publicService.getUserInfo = function () {
            return userInfoDict;
        };
    
    }
    
})();