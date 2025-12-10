"use strict";
// Composed Types - Enums
/* Let's create an anonymus function with autoinvoque (lambda)
to create various files in the same project using similar names
*/
(function () {
    function callSuperman() {
    }
    var a = callSuperman();
    console.log(a); // This returns an "undefined" by default
    /**********/
    function callBatman() {
        // return 1; It's not valid because collides with void
    }
    var b = callBatman();
    console.log(b); // Now this returns a "void"
    var callWonderWoman = function () {
        return; // Altough has a return, it's valid if not 
        // value is assigned because it's interpreted as a "void"
    };
})();
//# sourceMappingURL=void.js.map