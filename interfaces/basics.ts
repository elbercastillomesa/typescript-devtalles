(() => {

    /**
     * Interfaces and Types are almost equal, the main difference is that Types are not extendable 
     * once they're defined, keep the same. 
     * 
     * Interfaces do extend, as they're also similar to a class, where you only define the behaviour
     * but not the implementation (methods)
     */
    
    interface Hero {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string,
    }

    let flash : Hero = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super Speed", "Time Travel"],
        getName() {
            return this.name;
        },
    }


    let superman : Hero = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super Strengh", "Super Jump (Fly)"],
        getName() {
            return this.name;
        },
    }


})()