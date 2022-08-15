(function() {

"use strict";


angular.module("mainModule")
.controller("servicesController", ServicesController);


ServicesController.$inject = ["servicesService"];
function ServicesController(servicesService) {
    var ctrl = this;
    
    ctrl.srvcs = servicesService.items;

}

})();