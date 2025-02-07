var app = angular.module('shoppingApp', []);

app.controller('ShoppingController', function ($scope) {
    // Default shopping items
    $scope.shoppingItems = ['Milk', 'Bread', 'Eggs'];

    // Function to add a new item to the list
    $scope.addItem = function () {
        $scope.errortext = "";
        if ($scope.newItem && $scope.shoppingItems.indexOf($scope.newItem) === -1) {
            $scope.shoppingItems.push($scope.newItem);
            $scope.newItem = ''; // Clear the input field
        }
        else 
        {
            $scope.errortext = "The item is already in your shopping list.";
        }
    };

    // Function to remove an item from the list
    $scope.removeItem = function (index) {
        $scope.shoppingItems.splice(index, 1);
    };
});
