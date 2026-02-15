"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super Speed", "Time Travel"],
        getName() {
            return this.name;
        },
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super Strengh", "Super Jump (Fly)"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `The mutant ${id} has the name ${this.name} and real name ${this.realName}`;
        }
    }
})();
(() => {
    const client1 = {
        name: "Ferdinand",
        age: 25,
        address: {
            id: 125,
            zip: "10100",
            city: "Mexico City"
        }
    };
    const client2 = {
        name: "Melissa",
        age: 30,
    };
})();
(() => {
    let addTwoNumbers;
    addTwoNumbers = (a, b) => {
        return a + b;
    };
})();
(() => {
    const client1 = {
        name: "Ferdinand",
        age: 25,
        address: {
            id: 125,
            zip: "10100",
            city: "Mexico City"
        },
        getFullAddress(id) {
            return this.address;
        }
    };
    const client2 = {
        name: "Melissa",
        age: 30,
        getFullAddress(id) {
            return {
                id: 55,
                zip: "760023",
                city: "Cali"
            };
        }
    };
})();
//# sourceMappingURL=main.js.map