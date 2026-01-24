(() => {

    /* To solve the issue from the objects.ts file were goint to use TS Types */

    type Hero = {
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