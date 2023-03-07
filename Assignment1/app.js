(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  var sayMessage = function(NumOfItems) {
  if(NumOfItems >3){
    return "Too much!";
  }
  else if(NumOfItems <=3 && NumOfItems >0){
    return "Enjoy!";
  }
  else if(NumOfItems==0){
      return "Please enter data first";
  }
  };

  var splitItems = function(items){

    var totalItems=0;
    if(items !=""){
    const arrayOfItems = items.split(",");
    totalItems= arrayOfItems.length;
    return totalItems;
    }
    else{
      return totalItems;
    }
  };

  $scope.CheckIfTooMuch = function (){
   var items =  document.getElementById('lunch-menu').value;
   var NoOfItems=splitItems(items);
   $scope.message=sayMessage(NoOfItems);
  }
}

})();
