angular.module('editorTogether', [])

.controller("editorController", function($scope, $firebase, $stateParams, $interval, userSession){
  var sync, combinedCode;
  var code = $stateParams.code;
  var codeRef = new Firebase("https://togetherio.firebaseio.com/sessions/" + code +'/code');
  var usersRef = new Firebase("https://togetherio.firebaseio.com/sessions/" + code + '/users');
  sync = $firebase(usersRef);
    //  create unique user add to session
  sync.$push({username: userSession.user});
  combinedCode = $firebase(codeRef).$asObject();
  combinedCode.$bindTo($scope, 'value').then(function(){
      // console.log($scope.value)
    // $scope.value.code
  });
  // console.log(combinedCode);
  // combinedCode.$watch(function(e){
  //   // codeRef.update(code: {code: })
  //   if($scope.value){
  //     console.log($scope.value, e);
  //   }
  // });

  $scope.changedWords = 'yeah'
  
  $scope.users = sync.$asArray();

  $scope.aceOption = {
    useWrapMode : true,
    showGutter: true,
    theme:'twilight',
    mode: 'javascript',
    firstLineNumber: 1,
  }
})