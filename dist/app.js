"use strict";
/* Let's create an anonymus function with autoinvoque (lambda)
to create various files in the same project using similar names
*/
(function () {
    // Basic Functions
    function addNumbers(a, b) {
        return a + b;
    }
    var count = function (heroes) {
        return heroes.length;
    };
    //! Missed to type the "superHeroes" array
    // const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    count(superHeroes);
    // Default Params
    //! Missed the return, as the function only does a console, the type is only void
    // const callBatman = ( call : boolean = false) : (string | void) => {
    var callBatman = function (call) {
        if (call === void 0) { call = false; }
        if (call) {
            console.log("Batiseñal activada");
        }
    };
    callBatman();
    // Rest?
    //! Missed to use the "..." rest to receive the people arguments
    //! const joinHeroes = ( people : string[] ) : string => {
    var joinHeroes = function () {
        var people = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            people[_i] = arguments[_i];
        }
        return people.join(", ");
    };
    // Function Type
    var doesNothing = function (isNumber, isText, isBoolean, isArray) { };
    // Create the type of function that accepts the function "doesNothing"
    //! Missed to type appropiately the arguments and the return
    //! let alsoDoesNothing : Function;
    var alsoDoesNothing;
    alsoDoesNothing = doesNothing;
})();
//# sourceMappingURL=app.js.map