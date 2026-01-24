"use strict";
/* Let's create an anonymus function with autoinvoque (lambda)
to create various files in the same project using similar names
*/
(function () {
    // Objects Types
    // Objects
    var batmobile = {
        bodywork: "Black",
        model: "6x6",
        bulletproof: true,
        passengers: 4
    };
    var bumblebee = {
        bodywork: "Yellow and Black",
        model: "4x2",
        bulletproof: true,
        passengers: 4,
        shoot: function () {
            console.log("Shooting");
        }
    };
    // Villans should be and array of custom objects
    var villanos = [{
            name: "Lex Luthor",
            age: 54,
            mutation: false
        }, {
            name: "Erik Magnus Lehnsherr",
            age: 49,
            mutation: true
        }, {
            name: "James Logan",
            age: undefined,
            mutation: true
        }];
    // Multi Types
    // Create two types, one for Charles and other for Apocalypse
    var charles = {
        power: "psiquico",
        height: 1.78
    };
    var apocalipsis = {
        leader: true,
        members: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    // Mystique, should be any of the previous mutants ( Charles or Apocalypse)
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
//# sourceMappingURL=app.js.map