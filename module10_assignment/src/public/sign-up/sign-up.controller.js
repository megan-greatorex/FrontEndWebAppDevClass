(function () {
  "use strict";
  
  angular.module('public').controller('SignUpController', SignUpController);
  
  SignUpController.$inject = ['PublicService'];
  function SignUpController(PublicService) {
    var signUpCtrl = this;
  
    signUpCtrl.submit = function () {
      var promise = PublicService.getFavoriteItem(signUpCtrl.menuItem);
      promise.then(function (response) {
        signUpCtrl.favoriteItem = response.data;
        if(response.data == null){
          signUpCtrl.itemIssue = true;
        }
        else{
          signUpCtrl.itemIssue = false;
          let letter = signUpCtrl.favoriteItem.short_name.match("[a-zA-Z]+");
          var userInfo = {
            infoSaved: true,
            firstName: signUpCtrl.firstName,
            lastName: signUpCtrl.lastName,
            email: signUpCtrl.email,
            phoneNumber: signUpCtrl.phoneNumber,
            favoriteItem: signUpCtrl.favoriteItem,
            image: "images/menu/" + letter + "/" + signUpCtrl.favoriteItem.short_name + ".jpg"
          };

          PublicService.saveUserInfo(userInfo);
          signUpCtrl.completed = true;
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    };

    signUpCtrl.getFavoriteItem = function() {
      if(signUpCtrl.menuItem != null){
        var promise = PublicService.getFavoriteItem(signUpCtrl.menuItem);
        promise.then(function (response) {
          signUpCtrl.favoriteItem = response.data;
          if(response.data == null){
            signUpCtrl.itemIssue = true;
          }
          else{
            signUpCtrl.itemIssue = false;
          }
        })
        .catch(function (error) {
            console.log(error);
        })
      }
    }
      
    };

})();
