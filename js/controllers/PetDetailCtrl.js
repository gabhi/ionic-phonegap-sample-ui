// A simple controller that shows a tapped item's data
angular.module('starter.controllers').controller('CatchAllController', function($scope,$http,
    $stateParams, PetService) {


    $scope.sendEmail = function() {
        $http({
            method: 'post',
            url: 'http://gabhi.com/feedback.php',
            data: {
                'email': $scope.email,
                'name': $scope.name,
                'feedback': $scope.feedback

            }
        }).
        success(function(data, status) {

        }).
        error(function(data, status) {

        });
    };
});