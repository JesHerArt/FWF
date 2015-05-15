/*

    Jessica J. Hernandez
    ID: 0004631401
    May 15, 2015 - Week 2
    Front-end Web Frameworks | 201505-01
    Professor: Crystal Silvestro
    Full Sail University
    
*/

/*MAIN APP CALL*/           /*SPECIFYING THE APP CONTROLLER*/
angular.module('myApp', []).controller('EmployeeController', function($scope,dataService){

    $scope.empName;
    $scope.empPosition;
    $scope.empStAddress;
    $scope.empCity;
    $scope.empState;
    $scope.empZip;
    $scope.empPhone;
    $scope.empEmail;
    
    
    /*GET EMPLOYESS ARRAY BY CALLING DATASERVICE*/
    $scope.employeeArray = dataService.getEmployees();
    
    console.log($scope.employeeArray);
    
    
    /*ADD EMPLOYEE FUNCTION BY CALLING DATASERVICE*/
    $scope.addEmployee = function() {
        dataService.newEmployee($scope.empName, $scope.empPosition, $scope.empStAddress, $scope.empCity, $scope.empState, $scope.empZip, $scope.empPhone, $scope.empEmail);
        
        $scope.empName = '';
        $scope.empPosition = '';
        $scope.empStAddress = '';
        $scope.empCity = '';
        $scope.empState = '';
        $scope.empZip = '';
        $scope.empPhone = '';
        $scope.empEmail = '';
    }

    
    
    /*DELETE EMPLOYEE FUNCTION BY CALLING DATASERVICE*/
    $scope.deleteEmployee = function(employeeToDelete) {
        dataService.removeEmployee(employeeToDelete);
    }
    
});
/*END OF APP CONTROLLER*/