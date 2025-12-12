"use strict";
(function () {
    /**
     * The restArgs param captures all the additional strings
     * provided to the function, so only firstName is mandatory
     *
     * @param firstName
     * @param restArgs
     * @returns string
     */
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var name1 = fullName("Clark", "Kent");
    var name2 = fullName("Clark", "Joseph", "Kent");
    var name3 = fullName("Tony", "Stark");
    console.log({ name1: name1, name2: name2, name3: name3 });
})();
//# sourceMappingURL=args-rest.js.map