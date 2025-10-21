"use strict";
// Typescript is a superset of Javascript
// Primitive Types
/* String */
"maria teresa";
'Tesla';
"This is a string";
// Typescript is a superset of Javascript
/* Number */
var pi = 3.1415926;
var salary = 15000.1;
var age = 36;
/* Boolean */
var trainingOngoing = true;
var isDone = false;
/* Null & Undefined */
var nullValue = null;
var unassignedValue = undefined;
/* Symbol
Can be used when we want an object that has a property that is "unique"
still is considered a primitive type
*/
var sym = Symbol();
var sym2 = Symbol('myProperty');
// Composed Types
/* Object Literal (or Dictionary) */
var person = {
    name: 'Maria Teresa',
    age: 30
};
/* Arrays */
var hobbies = ['Cooking', 'Reading', 'Sports'];
/* Class */
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Maria Teresa';
        this.age = 30;
    }
    return Person;
}());
/* Functions */
function sum(a, b) {
    return a + b;
}
var sayHello = function () {
    console.log('Hello');
};
/* Generic */
function identity(arg) {
    return arg;
}
/* Tuple */
var human = ['Maria Teresa', 30];
//# sourceMappingURL=types.js.map