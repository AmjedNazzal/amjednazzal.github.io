(function() {

"use strict";


angular.module("mainModule")
.config(routeConfig);

routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
function routeConfig ($stateProvider, $urlRouterProvider) {


	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state('home', {
      url: '/home',
      templateUrl: 'template/home/home.template.html',
      controller: 'homeController as homectrl'
    })

    .state('homeview', {
      url: '/home#homeview',
      templateUrl: 'template/home/home.template.html'
    })


    .state('services', {
      url: '/services',
      templateUrl: 'template/services/services.template.html',
      controller: 'servicesController as srvcsctrl'
    })

    .state('srvcview', {
      url: '/services#srvcview',
      templateUrl: 'template/services/services.template.html'
    })

    .state('Maintenance', {
      url: '/services#maint',
      templateUrl: 'template/services/services.template.html'
    })
    .state('Modification', {
      url: '/services#mods',
      templateUrl: 'template/services/services.template.html'
    })
    .state('Updating', {
      url: '/services#updt',
      templateUrl: 'template/services/services.template.html'
    })



    .state('contact', {
      url: '/contact',
      templateUrl: 'template/contact/contact.template.html',
      controller: "contactController as contactctrl"
    })

    .state('ctctview', {
      url: '/contact#ctctview',
      templateUrl: 'template/contact/contact.template.html'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'template/about/about.template.html'
    })

    .state('aboutview', {
      url: '/about#aboutview',
      templateUrl: 'template/about/about.template.html'
    })


}


})();