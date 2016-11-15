angular.module("pureStorageApp", [
        'ui.bootstrap', 
        'ui.router'
    ])

    .config(function ($compileProvider, $stateProvider, $urlRouterProvider) { 

          $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|mfly):/);        
          $compileProvider.imgSrcSanitizationWhitelist(/^(mfly:|http:\/\/|https:\/\/)/);

          // For any unmatched url, redirect to /state1
          $urlRouterProvider.otherwise("/form");
          
          $stateProvider
                .state('form', {
                    url: '/form',
                    templateUrl: 'components/form/form.html', 
                    controller: 'FormCtrl'
                });

    });
        