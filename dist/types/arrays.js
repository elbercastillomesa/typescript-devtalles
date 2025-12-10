"use strict";
// Composed Types - Array
/* Let's create an anonymus function with autoinvoque (lambda)
to create various files in the same project using similar names
*/
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Array of numbers
    var numbersMix = [1, 2, 3, 4, 5, '6', 7, 8, 9]; // Array of numbers and strings
    // numbersMix.push(true); // Gives error, because on variable declaration, this option was not added.
    numbersMix.push(10); // Works properly
    var numbersSuperMix = [1, 2, 3, 4, 5, '6', 7, 8, true];
    numbersSuperMix.push(false); // Works properly
    var villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); } // This works because villians is an array of strings, 
    // if another type would be used, it would not work.
    );
})();
//# sourceMappingURL=arrays.js.map