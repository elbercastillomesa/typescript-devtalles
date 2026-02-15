/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    abstract class Mutant {
        constructor(
            public name : string,
            public realName : string,
        ) {}
    }

    // Abstract classes cannot be instantiated, they help to other classes to extend them
    // const wolverine:Mutant = new Mutant("Wolverine", "Logan");

    class Xmen extends Mutant { 

        saveTheWorld() {
            return 'The world is saved!';
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    wolverine.saveTheWorld()


    // Classes can have their proper methods
    class Villain extends Mutant { 
        conquerWorld() {
            return 'The world is conquered!';
        }
    }
    const magneto = new Villain("Magneto", "Erick Lensherr");
    magneto.conquerWorld()

    // We can use abstract classes to specify that we're waiting for an object or argument that
    // has been extended from this class (used as a type) 
    // -> Here the class Mutant is used as type for the argument "character"
    const printName = (character : Mutant) => {
        console.log(character.realName);
    }

    printName( magneto ) // -> This works as wolverine is an Villan whose comes from Mutant

})()
