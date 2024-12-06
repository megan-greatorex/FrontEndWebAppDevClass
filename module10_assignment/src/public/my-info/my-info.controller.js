(function () {
    "use strict";
    
    angular.module('public').controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['PublicService', 'userInfoSaved'];
    function MyInfoController(PublicService, userInfoSaved) {
        var myInfoCtrl = this;
        myInfoCtrl.userInfo = userInfoSaved;
    }
    
})();