/*

    Jessica J. Hernandez
    ID: 0004631401
    May 15, 2015 - Week 2
    Front-end Web Frameworks | 201505-01
    Professor: Crystal Silvestro
    Full Sail University
    
*/

angular.module('myApp').service("dataService", function() {
 
    /*DEFAULT EMPLOYEES LIST*/
    var employeesArray = [
            {
                name: "Garry Jones",
                position: "President of Full Sail University",
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
                phone: "(090) 8426-1967",
                email: "asuka@tekken.com",
                address: "4345 Sushi Park Way",
                city: "Tokyo",
                state: "JP",
                zip: ""
            }
        ]
    
    
    /*RETURNS THE ARRAY OF EMPLOYEES*/
    this.getEmployees = function() {
        var str = localStorage.getItem("EmployeesDirectList");
        employeesArray = JSON.parse(str)  || employeesArray;
        return employeesArray;
    }
    
    
    /*ADDS A NEW EMPLOYEE TO THE EMPLOYEES ARRAY*/
    this.newEmployee = function(name, title, addy, city, st, zip, ph, email) {
        var newEmployee = {
            name:       name,
            position:   title,
            address:    addy,
            city:       city,
            state:      st,
            zip:        zip,
            phone:      ph,
            email:      email
        };

        employeesArray.push(newEmployee);
        var str = JSON.stringify(employeesArray);
        localStorage.setItem("EmployeesDirectList", str);
    }
    
    
    /*DELETES AN EMPLOYEE FROM THE EMPLOYEES ARRAY*/
    this.removeEmployee = function(employee) {
        employeesArray.splice(employeesArray.indexOf(employee), 1);
        var str = JSON.stringify(employeesArray);
        localStorage.setItem("EmployeesDirectList", str);
    }

});