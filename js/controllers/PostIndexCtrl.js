// A simple controller that fetches a list of data from a service
angular.module('starter.controllers').controller('PostIndexCtrl',
    function($scope, $http, $stateParams, PetService) {
        // "Pets" is a service returning mock data (services.js)
        //$scope.pets = PetService.all();

        $scope.documents = [];
        $http.get('http://gabhi.com/dump.php?post_id=' + $stateParams.petId)
            .then(function(result) {

              	
                $scope.mypost = result.data.mypost;

            });
    })