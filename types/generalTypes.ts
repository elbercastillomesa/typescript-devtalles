// Typescript is a superset of Javascript

// Primitive Types

/* String */

"maria teresa";
'Tesla';
`This is a string`;

/* Number */

const pi = 3.1415926;
let salary = 15000.1;
let age = 36;

/* Boolean */

let trainingOngoing = true;
let isDone = false;

/* Null & Undefined */

let nullValue = null;
let unassignedValue = undefined;

/* Symbol 
Can be used when we want an object that has a property that is "unique"
still is considered a primitive type
*/

let sym = Symbol()
let sym2 = Symbol('myProperty')


// Composed Types

/* Object Literal (or Dictionary) */

const person = {
    name: 'Maria Teresa',
    age: 30
}

/* Arrays */

const hobbies = ['Cooking', 'Reading', 'Sports'];

/* Class */

class Person {
    name: string = 'Maria Teresa';
    age: number = 30;
}

/* Functions */

function sum(a: number, b: number): number {
    return a + b;
}

const sayHello = () => {
    console.log('Hello');
}

/* Interfaces */

interface Person {
    name: string;
    age: number;
}

/* Generic */

function identity<T>(arg: T): T {
    return arg;
}

/* Tuple */

const human: [string, number] = ['Maria Teresa', 30];