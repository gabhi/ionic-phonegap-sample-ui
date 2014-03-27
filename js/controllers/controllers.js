var myApp = angular.module('starter.controllers', []);

myApp.constant('mySettings', {
    categoryUrl :'http://gabhi.com/dump.php?id=',
    postUrl:'http://gabhi.com/dump.php?post_id=',
    appName:"Programming Interview Questions - Raise the bar!!"
});

myApp.filter('escape', function() {
  return window.escape;
});