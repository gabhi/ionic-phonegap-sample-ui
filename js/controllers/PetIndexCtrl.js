// A simple controller that fetches a list of data from a service
angular.module('starter.controllers').controller('PetIndexCtrl',
    function($scope, $http, $stateParams, PetService) {
        // "Pets" is a service returning mock data (services.js)
        //$scope.pets = PetService.all();

        $scope.documents = [];
        $http.get('http://gabhi.com/dump.php?id=' + $stateParams.petId)
            .then(function(result) {
                $scope.documents = result.data.cat;
                $scope.posts = result.data.myposts;
console.log(result.data.myposts);
            });
    })