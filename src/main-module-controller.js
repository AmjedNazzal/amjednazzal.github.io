(function() {

"use strict";


angular.module("mainModule")
.controller("mainModuleController", MainModuleController);

function MainModuleController() {
    var mainCtrl = this;
    mainCtrl.change = false;
    

    mainCtrl.clicked = function() {
        if(mainCtrl.change == false) {
            mainCtrl.change = true;
        } else {
            mainCtrl.change = false;
        }
    }

    mainCtrl.hide = function() {
        mainCtrl.change = false;
    }


}

})();