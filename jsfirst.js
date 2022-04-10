var myfirstapp = angular.module("form", []);
myfirstapp.controller("myform", function ($scope){
    $scope.person = {
        name : "digal",
        age : "20",
        mobile: "1234567890",
        email:"abcde@gmail.com",
        emailp1:"12345@gmail.com",
        emailp2:"12345abcde@gmail.com"
    };
});