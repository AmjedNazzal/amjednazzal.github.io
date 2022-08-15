(function() {

"use strict";


angular.module("mainModule")
.service("ourServices", OurServices);

function OurServices() {
    var ourServc = this;


    ourServc.items = [];
   
    


    ourServc.items.push({
    title: "Maintenance",
    description: "Fast and Reliable Automobile Mechanical Maintenance for Vehicles of All Makes",
    img: "images/Maintenance.jpg"
  });

    ourServc.items.push({
    title: "Modification",
    description: "Body and Performace Modification and Enhancement by Our Experienced and Creative Team",
    img: "images/Modification.jpg"
  });

    ourServc.items.push({
    title: "Updating",
    description: "Update Your Automobile Software to The Latest Versions in a Matter of Minutes",
    img: "images/Updating.jpg"
  });
      

}

})();