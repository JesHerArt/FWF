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
app.controller('GroceryController', function($scope){

    $scope.itemName;

    
    /*DEFAULT ITEMS LIST*/
    $scope.itemsArray = ['Bananas', 'Milk', 'Eggos', 'Mac & Cheese'];

    
    /*ADD ITEMS FUNCTION*/
    $scope.addItem = function() {
        
        var newItem = $scope.itemName;
        
        /*VALIDATE EMPTY STRING OR UNDEFINED INPUT*/
        if ( newItem === '' || newItem === undefined ) {
              
            $scope.msg = "✖ Error: Cannot add a blank item. Try again.";    
 
        } else {
            
            var notOnList = true;
         
            /*USE FOR LOOP TO ITTERATE THROUGH THE ITEMS LIST ARRAY*/
            for ( var i = 0; i <= $scope.itemsArray.length - 1; i++) {
                
                var currentListItem = $scope.itemsArray[i];
                
                /*VALIDATE IF ITEM IS ON THE LIST ALREADY*/
                if ( newItem === currentListItem ) {
                    
                    $scope.msg = "✖ Error: " + newItem + " is already in your grocery list.";
                    $scope.itemName = '';
                    notOnList = false;
                    break;
                    
                }
                
            } /*END OF FOR LOOP*/
            
            /*WHEN ITEM IS NOT ON THE LIST, IT WILL BE ADDEDD TO THE ARRAY*/
            if ( notOnList == true ) {
                
                $scope.itemsArray.push($scope.itemName);
                $scope.itemName = '';
                $scope.msg = "✔ Item Added";
                
            }
            
        } /*END OF ELSE STATEMENT*/

    } /*END OF ADD ITEMS FUNCTION*/

    
    /*DELETE ITEMS FUNCTION*/
    $scope.deleteItem = function(itemToDelete) {
        var index = $scope.itemsArray.indexOf(itemToDelete);

        $scope.itemsArray.splice(index, 1);
    }
    
});
/*END OF APP CONTROLLER*/