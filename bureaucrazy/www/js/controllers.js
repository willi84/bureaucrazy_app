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


  $scope.chats = Chats.all();
})
.controller('RequiredInformationCtrl', function($scope, $stateParams, Chats, $ionicNavBarDelegate) {
  //$scope.chat = Chats.get($stateParams.chatId);
  $ionicNavBarDelegate.title('Required Information');
})