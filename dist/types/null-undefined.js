"use strict";
// Composed Types - Enums
/* Let's create an anonymus function with autoinvoque (lambda)
to create various files in the same project using similar names
*/
(function () {
    var nothing = undefined;
    console.log(nothing);
    var notNothing = undefined;
    /**
    * Can't be assigned to a boolean. Unless we change
    * the "strictNullChecks" flag from the TS configuration
    */
    // Remember "null" is not the same as "undefinded"
    null !== undefined;
})();
//# sourceMappingURL=null-undefined.js.map