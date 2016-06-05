angular.module('starter.controllers', [])

.controller('WelcomeCtrl', function($scope) {
})

.controller('OnBoardingCtrl', function($scope) {
})

.controller('TopicsCtrl', function($scope, Chats, $ionicNavBarDelegate) {
  //$ionicNavBarDelegate.showBackButton([true]);
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //

  // not working on back
  $scope.$on('$ionicView.loaded', function(e) {
    $ionicNavBarDelegate.title('The list of topics');
  });
})

.controller('RequiredInformation2Ctrl', function($scope, $stateParams, Chats, $ionicNavBarDelegate) {
  //$scope.chat = Chats.get($stateParams.chatId);
  $ionicNavBarDelegate.title('Required Information2');
})


.controller('RequiredInformationCtrl', function($scope, $stateParams, Chats, $ionicNavBarDelegate) {
  //$scope.chat = Chats.get($stateParams.chatId);
  $ionicNavBarDelegate.title('Required Information');
})
.controller('RequiredInformation3Ctrl', function($scope, $stateParams, Chats, $ionicNavBarDelegate) {
  //$scope.chat = Chats.get($stateParams.chatId);
  $ionicNavBarDelegate.title('Required Information3');
  $scope.progressPercent = 60;
})

.controller('RequiredInformation4Ctrl', function($scope, $stateParams, Chats, $ionicNavBarDelegate) {
  //$scope.chat = Chats.get($stateParams.chatId);
  $ionicNavBarDelegate.title('Required Information4');
  $scope.progressPercent = 90;
})

.controller('RequiredInformation5Ctrl', function($scope, $stateParams, Chats, $ionicNavBarDelegate, $ionicModal) {
  //$scope.chat = Chats.get($stateParams.chatId);
  $ionicNavBarDelegate.title('Required Information4');
  
// Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/9-save-information.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

})