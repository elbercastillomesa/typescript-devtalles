"use strict";
(function () {
    /* To solve the issue from the objects.ts file were goint to use TS Types */
    var myCustomVariable = 'Charles';
    console.log(typeof myCustomVariable); // Prints "string"
    myCustomVariable = 100;
    console.log(typeof myCustomVariable); // Prints "number"
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Tragedy', 'Money'],
    };
    console.log(typeof myCustomVariable); // Prints "object" ---> JS translates "type" to "object"
})();
//# sourceMappingURL=union-types.js.map