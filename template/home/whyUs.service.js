(function() {

"use strict";


angular.module("mainModule")
.service("whyUsService", WhyUsService);

function WhyUsService() {
    var whyUsSrvc = this;


    whyUsSrvc.items = [];
   
    


    whyUsSrvc.items.push({
    title: "Reliable",
    description: "Our services are guaranteed to satisfy and meet the highest of standards",
    class: "fas fa-rocket"
  });

    whyUsSrvc.items.push({
    title: "Affordable",
    description: "Our services are affordable and competitive for all types of vehicles",
    class: "fas fa-money-check-alt"
  });

    whyUsSrvc.items.push({
    title: "Guaranteed",
    description: "We guarantee all of the services we offer and will refund if you are not satisfied",
    class: "fas fa-shield-alt"
  });
      

}

})();