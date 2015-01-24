angular.module('homeTogether', [])

.controller('homeController', function($scope, $firebase, $state, $interval){
  $scope.fire = function(){
    var myFirebaseRef = new Firebase("https://togetherio.firebaseio.com/sessions");
    var sync = $firebase(myFirebaseRef);
    sync.$push({users: {}}).then(function(ref){
      $state.go('session', {code: ref.key()});
    })
  };
  
  var array = ['build', 'work', 'collab', 'digest', 'come', 'explore'];
  var i = -1;

  $interval(function(){
    if(i >= array.length){
      i = -1
    }
    i++
    $scope.changedWords = array[i]
  }, 500, 7);

  $scope.exsitingRoom = function(){
    if($scope.privateRoom){
      $state.go('session', {code: $scope.privateRoom});
    }
  };

})