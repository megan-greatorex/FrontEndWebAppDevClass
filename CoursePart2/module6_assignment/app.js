(function () {
'use strict';
    
angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunchMenu = '';
    $scope.lunchMessage = '';
    $scope.color = {};
    $scope.borderColor = {};

    $scope.checkLunch = function () {
        var lunchMenuList = $scope.lunchMenu.split(',');
        var listLength = lunchMenuList.length;
        for(const item in lunchMenuList){
            if(lunchMenuList[item].trim() === ''){
                listLength -= 1;
            }
        }
        if($scope.lunchMenu === ''){
            $scope.lunchMessage = 'Please enter data first.';
            // Code adapted from https://docs.angularjs.org/api/ng/directive/ngStyle
            $scope.color = {color:'red'};
            $scope.borderColor = {border:'1px solid red'};
        }
        else if(listLength <= 3){
            $scope.lunchMessage = "Enjoy!";
            $scope.color = {color:'green'};
            $scope.borderColor = {border:'1px solid green'};
        }
        else {
            $scope.lunchMessage = "Too much!";
            $scope.color = {color:'green'};
            $scope.borderColor = {border:'1px solid green'};
        }
    };
}
})();