// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('step', {
      url: '/step',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })

  // Each tab has its own nav history stack:

  // step 1: welcome
  .state('step.1-welcome', {
    url: '/1-welcome',
    views: {
      'menuContent': {
        templateUrl: 'templates/1-welcome.html',
        controller: 'WelcomeCtrl'
      }
    }
  })

  // step 2: onboarding
  .state('step.2-onboarding', {
    url: '/2-onboarding',
    views: {
      'menuContent': {
        templateUrl: 'templates/2-onboarding.html',
        controller: 'OnBoardingCtrl'
      }
    }
  })

  // step 3: topics
  .state('step.3-topics', {
    url: '/3-topics',
    views: {
      'menuContent': {
        templateUrl: 'templates/3-topics.html',
        controller: 'TopicsCtrl'
      }
    }
  })

  // step 4: required-information
  .state('step.4-required-information', {
    url: '/4-required-information',
    views: {
      'menuContent': {
        templateUrl: 'templates/4-required-information.html',
        controller: 'RequiredInformationCtrl'
      }
    }
  })  

  // step 5: required-information
  .state('step.5-required-information', {
    url: '/5-required-information',
    views: {
      'menuContent': {
        templateUrl: 'templates/5-required-information.html',
        controller: 'RequiredInformation2Ctrl'
      }
    }
  })  

  .state('step.6-yes-required-information', {
    url: '/6-yes-required-information',
    views: {
      'menuContent': {
        templateUrl: 'templates/6-yes-required-information.html',
        controller: 'RequiredInformation3Ctrl'
      }
    }
  })
  .state('step.7-yes-required-information', {
    url: '/7-yes-required-information',
    views: {
      'menuContent': {
        templateUrl: 'templates/7-yes-required-information.html',
        controller: 'RequiredInformation4Ctrl'
      }
    }
  }) 

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/step/1-welcome');

});
