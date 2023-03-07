(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getItems();
  toBuyList.boughtItem = function (item) {
    ShoppingListCheckOffService.boughtItem(item);
    toBuyList.items= ShoppingListCheckOffService.getItems();
  }
};


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  };

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [
    {id:1, name: "cookies", quantity: 15},
    {id:2, name: "chocolates", quantity: 25},
    {id:3, name: "candies", quantity: 30},
    {id:4, name: "cupcakes", quantity: 40},
    {id:5, name: "muffins", quantity: 20}
  ];

  var boughtItems = [];

  service.boughtItem = function (item) {
      items = items.filter(function(element){
        return element.id !=item.id;
      });
    boughtItems.push(item);
  };

  service.getBoughtItems = function (itemIndex) {
    return boughtItems;
  };

  service.getItems = function () {
    return items;
  };
};

})();
