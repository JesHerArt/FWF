/*

    Jessica J. Hernandez
    ID: 0004631401
    May 8, 2015 - Week 1
    Front-end Web Frameworks | 201505-01
    Professor: Crystal Silvestro
    Full Sail University
    
*/

/*MAIN APP CALL*/
var app = angular.module('myApp', []);

/*SPECIFYING THE APP CONTROLLER*/
app.controller('GroceryController', function($scope, dataService){

    $scope.itemName;

    
    /*DEFAULT ITEMS LIST*/
    $scope.itemsArray = dataService.getItems();

    
    /*ADD ITEMS FUNCTION*/
    $scope.addItem = function() {
        dataService.add($scope.itemName);
            
        $scope.itemName = '';

    } /*END OF ADD ITEMS FUNCTION*/

    
    /*DELETE ITEMS FUNCTION*/
    $scope.deleteItem = function(itemToDelete) {
        dataService.removeItem(itemToDelete);
    }
    
});
/*END OF APP CONTROLLER*/