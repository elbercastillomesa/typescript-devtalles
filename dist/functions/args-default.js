"use strict";
(function () {
    /**
     * The "upper" argument is optional, and given by default
     *
     * @param firstName
     * @param lastName Using a "?" makes this argument optional"
     * @param upper Boolean to convert to uppercase, by default is false
     * @returns string
     */
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || 'No last name provided').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || 'No last name provided');
        }
    };
    var name1 = fullName("Tony", "Stark");
    // Now will print "Tony No last name provided"
    var name2 = fullName("Tony");
    // This prints: "TONY STARK"
    var name3 = fullName("Tony", "Stark", true);
    // This is an error because the order of arguments
    var name4 = fullName("Tony", true);
    console.log({ name1: name1, name2: name2, name3: name3, name4: name4 });
})();
//# sourceMappingURL=args-default.js.map