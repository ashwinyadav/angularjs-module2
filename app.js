(function (){
'use strict'
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    
    toBuy.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItems(itemIndex);
    };
      
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    
    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
 
}

function ShoppingListCheckOffService () {
    var service = this;
    var toBuyItems = [ 
        {name: "cookies", quantity:10},
        {name: "chips", quantity:50},
        {name: "carrots", quantity:12},
        {name: "chocolates", quantity:20},
        {name: "cake", quantity:1},
    ];
    var boughtItems = [];
    
    service.buyItems = function (index) {
        boughtItems.push(toBuyItems[index]);
        toBuyItems.splice(index,1);
    }
    
    service.getToBuyItems = function() {
        return toBuyItems;
    };
    
    service.getBoughtItems = function() {
        return boughtItems;
    };
        
}
    
    
})();

