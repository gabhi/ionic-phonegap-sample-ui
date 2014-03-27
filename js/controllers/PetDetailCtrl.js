// A simple controller that shows a tapped item's data
angular.module('starter.controllers').controller('CatchAllController', function($scope, $http,
    $stateParams) {
   
$scope.user={name:"",email:"",gender:""};
 $scope.update = function(user) {
console.log(user);
};


    $scope.sendEmail = function(user) {
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        console.log("ddddd");
        console.log(user.name+user.email+user.feedback);
        $http.post(
            
           'http://gabhi.com/feedback.php',
            {
                'email': user.email,
                'name': user.name,
                'feedback': user.feedback

            }
        ).
        success(function(data, status) {
          //  alert("Thank you");
          console.log(data);
            $scope.user={name:"",email:"",gender:""};

        }).
        error(function(data, status) {
            alert(status);
            $scope.user={name:"",email:"",gender:""};


        });


    };
});