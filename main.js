"use strict";
"maria teresa";
'Tesla';
"This is a string";
(function () {
    var batmobile = {
        bodywork: "Black",
        model: "6x6",
        bulletproof: true,
        passengers: 4
    };
    var bumblebee = {
        bodywork: "Yellow and Black",
        model: "4x2",
        bulletproof: true,
        passengers: 4,
        shoot: function () {
            console.log("Shooting");
        }
    };
    var villans = [{
            name: "Lex Luthor",
            age: 54,
            mutation: false
        }, {
            name: "Erik Magnus Lehnsherr",
            age: 49,
            mutation: true
        }, {
            name: "James Logan",
            age: undefined,
            mutation: true
        }];
    var charles = {
        power: "psiquico",
        height: 1.78
    };
    var apocalipsis = {
        leader: true,
        members: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
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
    var name2 = fullName("Tony");
    var name3 = fullName("Tony", "Stark", true);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'No last name provided');
    };
    var name1 = fullName("Tony", "Stark");
    var name2 = fullName("Tony");
    console.log({ name1: name1, name2: name2 });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name1 = fullName("Tony", "Stark");
    var noName;
    var name4 = fullName("Tony", noName);
})();
(function () {
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
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hi ".concat(name); };
    var saveTheWorld = function () { return "The world is saved"; };
    var myFunction;
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction("Adam"));
    myFunction = saveTheWorld;
    console.log(myFunction());
    myFunction: Function;
    var myTypedFunction1;
    var myTypedFunction2;
    var myTypedFunction3;
})();
(function () {
    var hero = "Flash";
    function returnName() {
        return hero;
    }
    var activateBatiSignal = function () {
        return "Batisignal Activated";
    };
    console.log(typeof activateBatiSignal);
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        power: ["Super Speed", "Time Travel"],
    };
    flash = {
        name: "Clark Kent",
        age: 60,
        power: ["Super Strengh", "Super Jump (Fly)"],
    };
    var newHero = {
        name: "Clark Kent",
        age: 60,
        power: ["Super Strengh", "Super Jump (Fly)"],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super Speed", "Time Travel"],
        getName: function () {
            return this.name;
        },
    };
    var superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super Strengh", "Super Jump (Fly)"],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var myCustomVariable = 'Charles';
    console.log(typeof myCustomVariable);
    myCustomVariable = 100;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Tragedy', 'Money'],
    };
    console.log(typeof myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 150.232564;
    console.log(avenger.toFixed(2));
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var numbersMix = [1, 2, 3, 4, 5, '6', 7, 8, 9];
    numbersMix.push(10);
    var numbersSuperMix = [1, 2, 3, 4, 5, '6', 7, 8, true];
    numbersSuperMix.push(false);
    var villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = true && false;
    isBatman = (isSuperman) ? false : true;
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
})();
var pi = 3.1415926;
var salary = 15000.1;
var age = 36;
var trainingOngoing = true;
var isDone = false;
var nullValue = null;
var unassignedValue = undefined;
var sym = Symbol();
var sym2 = Symbol('myProperty');
var person = {
    name: 'Maria Teresa',
    age: 30
};
var hobbies = ['Cooking', 'Reading', 'Sports'];
var Person = (function () {
    function Person() {
        this.name = 'Maria Teresa';
        this.age = 30;
    }
    return Person;
}());
function sum(a, b) {
    return a + b;
}
var sayHello = function () {
    console.log('Hello');
};
function identity(arg) {
    return arg;
}
var human = ['Maria Teresa', 30];
(function () {
    var neverFunction = function (errorMessage) {
        throw new Error(errorMessage);
    };
    neverFunction("Help!");
    var improvedNeverFunction = function (errorMessage) {
        if (false) {
            throw new Error(errorMessage);
        }
        return 1;
    };
    improvedNeverFunction("Help!");
})();
(function () {
    var nothing = undefined;
    console.log(nothing);
    null !== undefined;
})();
(function () {
    var avengers = 10;
    var villians = 20;
    if (villians > avengers) {
        console.log("We're doom!");
    }
    else {
        console.log("We're safe!");
    }
    avengers = Number('55A');
})();
(function () {
    var _a, _b;
    var batman = 'Batman';
    var greenLantern = "Green Lantern";
    var superman = "Superman";
    var testNumber = 123;
    console.log("I'm ".concat(batman));
    console.log(greenLantern.toUpperCase());
    console.log("Almost this number ".concat(testNumber, " for ").concat(superman));
    console.log(batman[10].toUpperCase());
    console.log((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    console.log(((_b = batman[10]) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || 'No value');
})();
(function () {
    var hero = ['Ironman', 100, false];
    hero[0] = 'Dr Strange';
    hero[1] = 50;
    hero[2] = true;
})();
(function () {
    function callSuperman() {
    }
    var a = callSuperman();
    console.log(a);
    function callBatman() {
    }
    var b = callBatman();
    console.log(b);
    var callWonderWoman = function () {
        return;
    };
})();
//# sourceMappingURL=main.js.map