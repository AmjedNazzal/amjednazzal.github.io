(function() {

"use strict";


angular.module("mainModule")
.controller("homeController", HomeController);


HomeController.$inject = ["whyUsService", "ourServices"];
function HomeController(whyUsService, ourServices) {
    var ctrl = this;
    
    ctrl.whyus = whyUsService.items;
    ctrl.ourservices = ourServices.items;
   

}

})();