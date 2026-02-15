"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        saveTheWorld() {
            return 'The world is saved!';
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    wolverine.saveTheWorld();
    class Villain extends Mutant {
        conquerWorld() {
            return 'The world is conquered!';
        }
    }
    const magneto = new Villain("Magneto", "Erick Lensherr");
    magneto.conquerWorld();
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(magneto);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('AntMan', 'Team Cap');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Calling Avenger");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
        getRealName() {
            return `${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Calling Xmen");
        }
        getMutantName() {
            return super.getRealName();
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getMutantName();
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Calling Avenger");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
        getRealName() {
            return `${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Calling Xmen");
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("The name should be at least 3 characters");
            }
            this.name = name;
        }
        getMutantName() {
            return super.getRealName();
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = "Lt. Logan";
    console.log(wolverine.fullName);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `The avenger ${this.name} is on the team ${this.team}`;
        }
        static getAvgAge() {
            return this.name;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('AntMan', 'Team Cap');
    console.log(antman.bio());
})();
(() => {
    class Apocalypse {
        constructor(name) {
            this.name = name;
        }
        static createInstance() {
            if (!Apocalypse.instance) {
                Apocalypse.instance = new Apocalypse("I'm Apocalypse... The only one.");
            }
            return Apocalypse.instance;
        }
    }
    const apocalypse = Apocalypse.createInstance();
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('AntMan', 'Team Cap');
})();
//# sourceMappingURL=main.js.map