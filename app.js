angular.module("pureStorageApp", [
        'ui.bootstrap', 
        'ui.router', 
        'angAccordion', 
        'ngMaterial', 
        'ngMdIcons'
    ])

    .config(function ($compileProvider, $stateProvider, $urlRouterProvider, $mdIconProvider) { 

          $mdIconProvider
           .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
           .defaultIconSet('img/icons/sets/core-icons.svg', 24);

          $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|mfly):/);        
          $compileProvider.imgSrcSanitizationWhitelist(/^(mfly:|http:\/\/|https:\/\/)/);

          // For any unmatched url, redirect to /state1
          $urlRouterProvider.otherwise("/form");
          
          $stateProvider
                .state('form', {
                    url: '/form',
                    templateUrl: 'components/form/form.html', 
                    controller: 'FormCtrl', 
                    resolve: {
                        tabs: function(TabData){
                          return TabData;
                        }
                    }
                });

    });
        