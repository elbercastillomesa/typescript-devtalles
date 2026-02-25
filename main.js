"use strict";
var Validations;
(function (Validations) {
    const validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateDate(new Date("2020-01-01")));
//# sourceMappingURL=main.js.map