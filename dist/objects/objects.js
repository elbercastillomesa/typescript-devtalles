"use strict";
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        power: ["Super Speed", "Time Travel"],
    };
    /* When trying to add a new key-value to the object, TS complaints about the
    / new key-value because TS will create a new Type for the object, even as the
    / object is definded as a "let", the type is set fixed.
    */
    //flash = {
    // nickname: "Speedster"
    //}
    // When updating the value from a key, TS will warn us about the other two missing, because
    // the type already exists and needs the exact full details.
    // flash = {
    //  name: "Clark Kent",
    // }
    flash = {
        name: "Clark Kent",
        age: 60,
        power: ["Super Strengh", "Super Jump (Fly)"],
        /* In case we would like to add a new method or key-value for the object, we won't be able
        using this method, TS requires from us to think in advance and plan ahead. */
        // getName() {
        //    return this.name;
        //}
    };
    /* !!! DISCLAIMER !!! */
    /* TS will always try to compile so even though TS claim the errors, the JS is compiled and
    will run, be aware that TS errors can be set as contraints to the compilation, but is not a
    default setting
    */
    // Properly typed object, the method is optional "?:" and the return is a string.
    var newHero = {
        name: "Clark Kent",
        age: 60,
        power: ["Super Strengh", "Super Jump (Fly)"],
        getName: function () {
            return this.name;
        },
    };
})();
//# sourceMappingURL=objects.js.map