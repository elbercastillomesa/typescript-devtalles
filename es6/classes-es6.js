/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    class Avenger { 
        name;
        power;

        constructor(name = "No Name", power = 0.0) {
            this.name = name;
            this.power = power;
        }
    }

    const hulk = new Avenger("Hulk", 10000000);
    console.log(hulk)

    class fliyingAvenger extends Avenger {
        flying;

        constructor(name = "No Name", power = 0.0) {
            super(name, power); // This is the parent constructor, requires the same arguments
            this.flying = true;
        }
    }

    const falcon = new fliyingAvenger("Falcon", 1000);
    console.log(falcon)

})()
