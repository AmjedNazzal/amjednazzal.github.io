(function() {

"use strict";


angular.module("mainModule")
.service("servicesService", ServicesService);

function ServicesService() {
    var services = this;


    services.items = ["acura", "audi", "bmw", "chevrolet", "daewoo", "fiat", "ford", "honda", "hyundai"];
   

}

})();