"use strict";
// Primitive Types - Strings
/* Let's create an anonymus function with autoinvoque (lambda)
to create various files in the same project using similar names
*/
(function () {
    var _a, _b;
    var batman = 'Batman';
    var greenLantern = "Green Lantern";
    var superman = "Superman";
    var testNumber = 123;
    console.log("I'm ".concat(batman));
    console.log(greenLantern.toUpperCase());
    console.log("Almost this number ".concat(testNumber, " for ").concat(superman));
    console.log(batman[10].toUpperCase()); // This will trigger an error because batman[10] is undefined
    console.log((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()); // The null check will avoid the previous error.
    console.log(((_b = batman[10]) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || 'No value'); // Returns a string if batman[10] is undefined
})();
//# sourceMappingURL=strings.js.map