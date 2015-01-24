angular.module("Together", [
  "ui.router",
  "firebase", 
  "ui.ace",
  'homeTogether',
  'editorTogether'
])
.controller('AppController', function($rootScope, $scope, $http){
  //side user nav bar
  var sideNavState = false;
  $scope.toggle = function(){
    $scope.show = !$scope.show;
  };

  $scope.checkLogin = function(){
    if($scope.user.password && $scope.user.email && $scope.user.username){
      $http.post('/signup', $scope.user).
        success(function(data, status, headers, config){
          console.log(data);
        }).
        error(function(data, status, headers, config){
          console.log(data);
        })
    } else{
      console.log('nope');
    }
  };

})
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      templateUrl: 'home/home.html',
      controller: 'homeController',
      url: '/'
    })
    .state('session', {
      templateUrl: 'text_editor/texteditor.html',
      controller: 'editorController',
      url: '/session/:code'
    })
})
.factory('userSession', function(){
  //create random username for firebase
  var username = Math.floor(Math.random()*200); 
  return {
    user: 'user ' + username
  }
})