(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController', LunchCheckerController);
LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope) {

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
    console.log(arrayOfItems);
    totalItems= arrayOfItems.length;
    console.log(totalItems);
    return totalItems;
    }
    else{
      return totalItems;
    }
  };

  $scope.CheckIfTooMuch = function (){
   var items =  document.getElementById('lunch-menu').value;
   console.log(items);
   var NoOfItems=splitItems(items);
   console.log(NoOfItems);
   $scope.message=sayMessage(NoOfItems);
  }
}

})();
