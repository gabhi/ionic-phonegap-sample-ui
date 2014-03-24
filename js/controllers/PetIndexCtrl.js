// A simple controller that fetches a list of data from a service
angular.module('starter.controllers').controller('PetIndexCtrl', function($scope, PetService) {
    // "Pets" is a service returning mock data (services.js)
    $scope.pets = PetService.all();
})