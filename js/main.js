/*

    Jessica J. Hernandez
    ID: 0004631401
    May 8, 2015 - Week 1
    Front-end Web Frameworks | 201505-01
    Professor: Crystal Silvestro
    Full Sail University
    
*/


/*(function ($) {
    
    $(".listIcon").hover( function() {
            $(this).attr("src","images/checked.png");
        }, 
        function() {
            $(".listIcon").attr("src","images/unchecked.png");
        }
    );
  
    }
    
    
})(jQuery);*/ // end private scope

/*
$.noConflict();
jQuery( document ).ready(function( $ ) {
  
    $(".listIcon").hover( function() {
            $(this).attr("src","images/checked.png");
        }, 
        function() {
            $(".listIcon").attr("src","images/unchecked.png");
        }
    );
  
    } 
    
});*/


jQuery(document).ready(function($){
    
  $(".listIcon").hover(function() {
    
    $scope.$apply(function() {
       $(this).attr("src","images/checked.png");
    }),
    $scope.$apply(function() {
       $(".listIcon").attr("src","images/unchecked.png");
    });  
      
  });
    
});



var app = angular.module('myApp', []);

app.controller('GroceryController', function($scope){

    $scope.itemName;

    $scope.itemsArray = ['Bananas', 'Milk', 'Eggos', 'Mac & Cheese'];

    $scope.addItem = function() {
        
        var newItem = $scope.itemName;
        
        if ( newItem === '' || newItem === undefined ) {
              
            $scope.msg = "✖ Error: Cannot add a blank item. Try again.";    
 
        } else {
            
            var notOnList = true;
         
            for ( var i = 0; i <= $scope.itemsArray.length - 1; i++) {
                
                var currentListItem = $scope.itemsArray[i];
             
                if ( newItem === currentListItem ) {
                    
                    $scope.msg = "✖ Error: " + newItem + " is already in your grocery list.";
                    $scope.itemName = '';
                    notOnList = false;
                    break;
                    
                }
                
            }
            
            if ( notOnList == true ) {
                
                $scope.itemsArray.push($scope.itemName);
                $scope.itemName = '';
                $scope.msg = "✔ Item Added";
                
            }
            
        }

    }

    $scope.deleteItem = function(itemToDelete) {
        var index = $scope.itemsArray.indexOf(itemToDelete);

        $scope.itemsArray.splice(index, 1);
    }
    
});