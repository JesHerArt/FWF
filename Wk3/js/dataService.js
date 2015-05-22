/*

    Jessica J. Hernandez
    ID: 0004631401
    May 22, 2015 - Week 3
    Front-end Web Frameworks | 201505-01
    Professor: Crystal Silvestro
    Full Sail University
    
*/

angular.module('myApp').service("dataService", function() {
 
    /*DEFAULT HOMEWORKS LIST*/
    var homeworksArray = [
            {
                course: "Information Retrieval",
                asgName: "Homework 2",
                dueDate: "2015-05-27"
            },
            {
                course: "Front-End Web Frameworks",
                asgName: "Lists Application",
                dueDate: "2015-05-22"
            },
            {
                course: "Information Retrieval",
                asgName: "Homework 4",
                dueDate: "2015-06-15"
            },
            {
                course: "Information Retrieval",
                asgName: "Homework 3",
                dueDate: "2015-06-08"
            },
            {
                course: "Front-End Web Frameworks",
                asgName: "Research Project",
                dueDate: "2015-05-30"
            }
        ];
    
    
    /*RETURNS THE ARRAY OF HOMEWORKS*/
    this.getHomeworks = function() {
        var str = localStorage.getItem("HomeworkList");
        homeworksArray = JSON.parse(str)  || homeworksArray;
        return homeworksArray;
    }
    
    
    /*ADDS A NEW HOMEWORK TO THE HOMEWORKS ARRAY*/
    this.newHomework = function(course, name, date) {
        var newHomework = {
            course:     course,
            asgName:    name,
            dueDate:    date
        };

        homeworksArray.push(newHomework);
        var str = JSON.stringify(homeworksArray);
        localStorage.setItem("HomeworkList", str);
    }
    
    
    /*DELETES A HOMEWORK FROM THE HOMEWORKS ARRAY*/
    this.removeHomework = function(homework) {
        homeworksArray.splice(homeworksArray.indexOf(homework), 1);
        var str = JSON.stringify(homeworksArray);
        localStorage.setItem("HomeworkList", str);
    }
    
    
    /*DEFAULT GAMES LIST*/
    var gamesArray = ["Fantasy Life", "Legend of Zelda: A Link Between Worlds", "Skylanders: Swap Force", "Monster Hunter 4"];
    
    
    /*RETURNS THE ARRAY OF HOMEWORKS*/
    this.getGames = function() {
        var str = localStorage.getItem("GamesList");
        gamesArray = JSON.parse(str)  || gamesArray;
        return gamesArray;
    }
    
    
    /*ADDS A NEW HOMEWORK TO THE HOMEWORKS ARRAY*/
    this.newGame = function(game) {
        var newGame = game;

        gamesArray.push(newGame);
        var str = JSON.stringify(gamesArray);
        localStorage.setItem("GamesList", str);
    }
    
    
    /*DELETES A HOMEWORK FROM THE HOMEWORKS ARRAY*/
    this.removeGame = function(game) {
        gamesArray.splice(homeworksArray.indexOf(game), 1);
        var str = JSON.stringify(gamesArray);
        localStorage.setItem("GamesList", str);
    }
    
    
        /*DEFAULT BILLS LIST*/
    var billsArray = [
            {
                name: "Nissan",
                ammount: "304.00",
                dueDate: "2015-06-07"
            },
            {
                name: "Macy's",
                ammount: "25.00",
                dueDate: "2015-05-30"
            },
            {
                name: "Best Buy",
                ammount: "10.00",
                dueDate: "2015-06-23"
            },
            {
                name: "Citi Bank",
                ammount: "75.00",
                dueDate: "2015-06-10"
            }
        ];
    
    
    /*RETURNS THE ARRAY OF BILLS*/
    this.getBills = function() {
        var str = localStorage.getItem("BillsList");
        billsArray = JSON.parse(str)  || billsArray;
        return billsArray;
    }
    
    
    /*ADDS A NEW BILL TO THE BILLS ARRAY*/
    this.newBill = function(name, ammount, date) {
        var newBill = {
            name:       name,
            ammount:    ammount,
            dueDate:    date
        };

        billsArray.push(newBill);
        var str = JSON.stringify(billsArray);
        localStorage.setItem("BillsList", str);
    }
    
    
    /*DELETES A BILL FROM THE BILLS ARRAY*/
    this.removeBill = function(bill) {
        billsArray.splice(billsArray.indexOf(bill), 1);
        var str = JSON.stringify(billsArray);
        localStorage.setItem("BillsList", str);
    }

});