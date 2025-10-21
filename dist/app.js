"use strict";
/* Let's create an anonymus function with autoinvoque (lambda)
to create various files in the same project using similar names
*/
(function () {
    var a = 10; // Wrong!
    var b = 20; // Correct!!
    function sayHello(msg) {
        console.log(msg);
    }
})();
//# sourceMappingURL=app.js.map