(function() {
  var app = angular.module('gemStore', ['ngStorage']);

  app.controller('StoreController', function(){
    this.products = gems;
  });
  
var items = [{ name: 'Azurite', price: 2.95 }
  
  
  ];
  function SaveDataToLocalStorage(data)
  {       
      var receiveddata = JSON.stringify(data);
      a.push(receiveddata);
      alert(a);

      localStorage.setItem('session', a);

  }
  
  app.controller('CartForm', function($scope, $localStorage){
	  var a = [{ name: 'Azurite', price: 2.95 }];
	  $scope.invoice = {
		        items: [{
		            qty: 10,
		            description: 'item',
		            cost: 9.95}]
		    };

		    $scope.addItem = function() {
		        $scope.invoice.items.push({
		            qty: 1,
		            description: 'Angular',
		            cost: 0
		        });
		        localStorage.storeValue('session', items.qty,items.description,items.cost);
		        sessionStorage.setItem('items', JSON.stringify(items.qty,items.description,items.cost));
		        var obj = JSON.parse(sessionStorage.items);
		    },

		    $scope.removeItem = function(index) {
		        $scope.invoice.items.splice(index, 1);
		    },

		    $scope.total = function() {
		        var total = 0;
		        angular.forEach($scope.invoice.items, function(item) {
		            total += item.qty * item.cost;
		        })

		        return total;
		    }
		   
		  
	  
	  
  });
  
  
  var gems = [
    { name: 'Azurite', price: 2.95 },
    { name: 'Bloodstone', price: 5.95 },
    { name: 'Zircon', price: 3.95 }
  ];
  
  
  
  
})();
