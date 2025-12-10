"use strict";
// Composed Types - Enums
/* Let's create an anonymus function with autoinvoque (lambda)
to create various files in the same project using similar names
*/
(function () {
    /**
     * Enums allow us to define a set of named constants.
     * They make it easier to document intent, or create a set
     * of distinct cases. TypeScript provides both numeric
     * and string-based enums.
     */
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
        //medium = (max / 2),
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    // This is a 2, because unless the value is specified manually
    // will keep the "array" order from the previous value and add +1
})();
//# sourceMappingURL=enums.js.map