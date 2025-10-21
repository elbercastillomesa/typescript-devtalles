"use strict";
// Primitive Types - Numbers
/* Let's create an anonymus function with autoinvoque (lambda)
to create various files in the same project using similar names
*/
(function () {
    var avengers = 10;
    var villians = 20;
    if (villians > avengers) {
        console.log("We're doom!");
    }
    else {
        console.log("We're safe!");
    }
    avengers = Number('55A'); // This is a NaN, which is still a number.
})();
//# sourceMappingURL=numbers.js.map