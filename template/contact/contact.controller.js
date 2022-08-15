(function() {

"use strict";


angular.module("mainModule")
.controller("contactController", ContactController)
.controller("contactCollectorController", ContactCollectorController)
.service("focusService", FocusService)
.directive("focusDir", FocusedDirective);


function FocusedDirective() {
    var ddo = {
        templateUrl: 'template/contact/contact.form.html'
    };
    return ddo;
}



ContactController.$inject = ["focusService"];
function ContactController(focusService) {
    var ctrl = this;
    
    ctrl.name = "";
    ctrl.email = "";
    ctrl.msg = "";

    ctrl.addItems = function() {
        focusService.addInfo(ctrl.name, ctrl.email, ctrl.msg);
    }


    ctrl.submit = function () {
        ctrl.completed = true;
    };

}

ContactCollectorController.$inject = ["focusService"];
function ContactCollectorController(focusService) {
    var collector = this;
    var focusedNumber = "";
    collector.focus = [false, false, false];

    
    collector.focusedField = function(index) {
        focusedNumber = index;
        
        collector.focus[focusedNumber] = true;
    };  

    collector.blurredField = function() {
        collector.items = focusService.getInfo();
        
    
        var theobject = "";
        var name = "";
        var email = "";
        var msg = "";

         for(var i = 0; i < collector.items.length; i++) {
            theobject = collector.items[i];
            }

            
        
        if((theobject[focusedNumber] == "") || (theobject[focusedNumber] == undefined)) {
        collector.focus[focusedNumber] = false;
        } 
   
        
    };

    
}



function FocusService() {

    var service = this;
    var focus = null;
    var info = [];

    service.addInfo = function(name, email, msg) {
        var items = [name, email, msg];
        
        info.push(items);
            
    }


    service.getInfo = function () {
        return info;
    };

    
}

})();