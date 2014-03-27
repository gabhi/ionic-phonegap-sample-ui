// A simple controller that fetches a list of data from a service
angular.module('starter.controllers').controller('PetIndexCtrl',
    function($scope,$http, $stateParams, PetService, mySettings) {
        // "Pets" is a service returning mock data (services.js)
        //$scope.pets = PetService.all();

        $scope.documents = [];
        $scope.title="Spiral"
        
        $http.get(mySettings.categoryUrl + $stateParams.petId)
            .then(function(result) {

                $scope.documents = result.data.cat;
              //  console.log(result.data);
                $scope.posts = result.data.myposts;
                //console.log(result.data.myposts);
            });
    })