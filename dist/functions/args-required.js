"use strict";
(function () {
    /**
     * Both arguments for this function are mandatory.
     *
     * @param firstName
     * @param lastName
     * @returns string
     */
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name1 = fullName("Tony", "Stark");
    // This triggers and error because lastName is required
    var name2 = fullName("Tony");
    // This triggers and error because lastName should be a string
    var name3 = fullName("Tony", false);
    // This "works" but is incorrect, please be careful
    var noName;
    var name4 = fullName("Tony", noName);
    console.log({ name1: name1, name2: name2, name3: name3, name4: name4 });
})();
//# sourceMappingURL=args-required.js.map