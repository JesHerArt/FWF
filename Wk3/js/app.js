/*

    Jessica J. Hernandez
    ID: 0004631401
    May 22, 2015 - Week 3
    Front-end Web Frameworks | 201505-01
    Professor: Crystal Silvestro
    Full Sail University
    
*/

/*MAIN APP CALL*/
angular.module('myApp', ['ngRoute'])
    
    /*ROUTING VIEWS CONFIGURATION*/
    .config(function($routeProvider){
    
        $routeProvider.when('/view1',{
            templateUrl :   "view1.html",
            controller  :   "BillsController"
        }).when('/view2',{
            templateUrl :   "view2.html",
            controller  :   "HomeworkController"
        }).when('/view3/:gameParam',{
            templateUrl :   "view3.html",
            controller  :   "GamesController"  
        }).otherwise({
            redirectTo  :   "/view1" 
        });
    
    })
    

    /*SPECIFYING THE APP CONTROLLER FOR HOMEWORKS LIST*/
    .controller('HomeworkController', function($scope,dataService){

        $scope.hwCourse;
        $scope.hwName;
        $scope.hwDueDate;


        /*GET HOMEWORK ARRAY BY CALLING DATASERVICE*/
        $scope.homeworkArray = dataService.getHomeworks();


        /*ADD HOMEWORK FUNCTION BY CALLING DATASERVICE*/
        $scope.addHomework = function() {
            dataService.newHomework($scope.hwCourse, $scope.hwName, $scope.hwDueDate);
            
            $scope.hwCourse = '';
            $scope.hwName = '';
            $scope.hwDueDate = '';
        }


        /*DELETE HOMEWORK FUNCTION BY CALLING DATASERVICE*/
        $scope.deleteHomework = function(hwToDelete) {
            dataService.removeHomework(hwToDelete);
        }


        /*RESET ADD HOMEWORK FORM*/
        $scope.resetForm = function() {
            $scope.hwCourse = '';
            $scope.hwName = '';
            $scope.hwDueDate = '';
        }

        
    /*SPECIFYING THE APP CONTROLLER FOR GAMES LIST*/
    }).controller('GamesController', function($scope,$routeParams,dataService){

        $scope.videoGame;
    
        $scope.word = $routeParams.gameParam;


        /*GET GAME ARRAY BY CALLING DATASERVICE*/
        $scope.gameArray = dataService.getGames();


        /*ADD GAME FUNCTION BY CALLING DATASERVICE*/
        $scope.addGame = function() {
            dataService.newGame($scope.videoGame);
            
            $scope.videoGame = '';
        }


        /*DELETE GAME FUNCTION BY CALLING DATASERVICE*/
        $scope.deleteGame = function(gameToDelete) {
            dataService.removeGame(gameToDelete);
        }

        
    /*SPECIFYING THE APP CONTROLLER FOR BILLS LIST*/
    }).controller('BillsController', function($scope,dataService){

        $scope.billerName;
        $scope.billAmmount;
        $scope.billDueDate;


        /*GET BILLS ARRAY BY CALLING DATASERVICE*/
        $scope.billArray = dataService.getBills();


        /*ADD BILLS FUNCTION BY CALLING DATASERVICE*/
        $scope.addBiller = function() {
            dataService.newBill($scope.billerName, $scope.billAmmount, $scope.billDueDate);
            
            $scope.billerName = '';
            $scope.billAmmount = '';
            $scope.billDueDate = '';
        }


        /*DELETE BILLS FUNCTION BY CALLING DATASERVICE*/
        $scope.deleteBill = function(billToDelete) {
            dataService.removeBill(billToDelete);
        }


        /*RESET ADD BILLS FORM*/
        $scope.resetForm = function() {
            $scope.billerName = '';
            $scope.billAmmount = '';
            $scope.billDueDate = '';
        }

    });
    /*END OF APP CONTROLLERS*/