// A simple controller that fetches a list of data from a service
angular.module('starter.controllers').controller('PostIndexCtrl',
    function($scope, $http, $stateParams, PetService, $window,mySettings) {
        // "Pets" is a service returning mock data (services.js)
        //$scope.pets = PetService.all();

        $scope.documents = [];
        $scope.mypost = [];
        $scope.consts = mySettings.apiUri;
        $http.get(mySettings.postUrl + $stateParams.petId)
            .then(function(result) {


                $scope.mypost = result.data.mypost;
                $scope.mydata = result.data.mypost.post_content;


                $scope.getEmail = function(myname) {
                    var email = {
                        address: "gaikwad.abhijit@gmail.com",
                        subject: "I m stuck on " + myname,
                        body: "<br /><br />Sent from " + mySettings.appName
                    };
                    return email;
                };


                $scope.email = $scope.getEmail($scope.mypost.post_title);
            });





               

    })