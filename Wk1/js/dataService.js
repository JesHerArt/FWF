
angular.module('myApp').service("dataService", function() {    

    var itemArray = ['Bananas', 'Milk', 'Eggos', 'Mac & Cheese', 'Cold Cuts'];
    

    this.getItems = function() {
        var str = localStorage.getItem("GroceryList");
        itemArray = JSON.parse(str)  || itemArray;
        return itemArray;
    }
    
    

    this.add = function(item) {
                
        itemArray.push(item);
        var str = JSON.stringify(itemArray);
        localStorage.setItem("GroceryList", str);

    }

    this.removeItem = function(item) {
        itemArray.splice(itemArray.indexOf(item), 1);
        var str = JSON.stringify(itemArray);
        localStorage.setItem("GroceryList", str);
    }
    
});