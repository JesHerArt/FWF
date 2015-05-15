/*

    Jessica J. Hernandez
    ID: 0004631401
    May 15, 2015 - Week 2
    Front-end Web Frameworks | 201505-01
    Professor: Crystal Silvestro
    Full Sail University
    
*/

/*MAIN APP CALL*/
var app = angular.module('myApp', []);

/*SPECIFYING THE APP CONTROLLER*/
app.controller('EmployeeController', function($scope){

    $scope.empName;
    $scope.empPosition;
    $scope.empStAddress;
    $scope.empCity;
    $scope.empState;
    $scope.empZip;
    $scope.empPhone;
    $scope.empEmail;
    
    
    /*DEFAULT EMPLOYEES LIST*/
    $scope.employeesArray = [
            {
                name: "Garry Jones",
                position: "Full Sail President",
                phone: "1 (800) 226-7625",
                email: "garry@fullsail.com",
                address: "3300 University Boulevard",
                city: "Winter Park",
                state: "FL",
                zip: "32792"
            },
            {
                name: "Crystal Silvestro",
                position: "Professor at Full Sail University",
                phone: "(407) 679-0100",
                email: "csilvestro@fullsail.com",
                address: "3300 University Boulevard",
                city: "Winter Park",
                state: "FL",
                zip: "32792"
            },
            {
                name: "Jessica Hernandez",
                position: "Student",
                phone: "(786) 567-7223",
                email: "jesherart@fullsail.edu",
                address: "12345 South Road",
                city: "Miami",
                state: "FL",
                zip: "33133"
            },
            {
                name: "Asuka Kazama",
                position: "Professional Fighter",
                phone: "(407) 679-0100",
                email: "asuka@tekken.com",
                address: "4345 Sushi Park Way",
                city: "Tokyo",
                state: "JP",
                zip: ""
            }
        ]
    
    
    
    /*ADD EMPLOYEE FUNCTION*/
    $scope.addEmployee = function() {
        
        var newEmployee = {
            name: $scope.empName,
            position: $scope.empPosition,
            phone: $scope.empPhone,
            email: $scope.empEmail,
            addy: $scope.empStAddress,
            city: $scope.empCity,
            state: $scope.empState,
            zip: $scope.empZip 
        };
        
        $scope.employeesArray.push(newEmployee);
        
        $scope.empName = '';
        $scope.empPosition = '';
        $scope.empStAddress = '';
        $scope.empCity = '';
        $scope.empState = '';
        $scope.empZip = '';
        $scope.empPhone = '';
        $scope.empEmail = '';
            
    }

    
    
    /*DELETE EMPLOYEE FUNCTION*/
    $scope.deleteEmployee = function(empToDelete) {
        var index = $scope.employeesArray.indexOf(empToDelete);

        $scope.employeesArray.splice(index, 1);
    }
    
});
/*END OF APP CONTROLLER*/