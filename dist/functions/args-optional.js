"use strict";
(function () {
    /**
     * The last argument for this function is optional.
     *
     * @param firstName
     * @param lastName Using a "?" makes this argument optional"
     * @returns string
     */
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'No last name provided');
    };
    var name1 = fullName("Tony", "Stark");
    // Now will print "Tony No last name provided"
    var name2 = fullName("Tony");
    console.log({ name1: name1, name2: name2 });
})();
//# sourceMappingURL=args-optional.js.map