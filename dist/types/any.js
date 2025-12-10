"use strict";
// Primitive Types - Any
/* Let's create an anonymus function with autoinvoque (lambda)
to create various files in the same project using similar names
*/
(function () {
    var avenger = 123;
    var exists; // If not value is assigned, it is like an "any"
    var power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0)); // Although we can use the function, this conflicts at the moment were programing.
    avenger = 150.232564;
    console.log(avenger.toFixed(2)); // Same here, we should avoid using "any" types.
})();
//# sourceMappingURL=any.js.map