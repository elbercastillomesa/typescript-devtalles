"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        active: true,
        power: 1500.123,
    };
    const { power, vision } = avengers;
    console.log(power.toFixed(2), vision.toUpperCase());
    const printAvenger = (avengers) => {
        console.log(avengers.vision);
    };
    printAvenger(avengers);
    const destructAvengers = (_a) => {
        var { vision } = _a, other_rest = __rest(_a, ["vision"]);
        console.log(vision);
        console.log(other_rest);
    };
    destructAvengers(avengers);
    const avengersArray = ['Cap. America', 'Ironman', 'Hulk'];
    const ironman = avengersArray[1];
    console.log({ ironman });
    const [, , hulk] = avengersArray[1];
    console.log({ hulk });
})();
(() => {
    const ironman = {
        name: "Tony Stark",
        weapon: "Armorsuit"
    };
    const captainAmerica = {
        name: "Steve Rogers",
        weapon: "Shield"
    };
    const thor = {
        name: "Thor Odinson",
        weapon: "Mjolnir"
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name.toUpperCase(), avenger.weapon);
    }
})();
(() => {
    const nombre = "Ferdinand";
    const getName = function () { };
})();
//# sourceMappingURL=main.js.map