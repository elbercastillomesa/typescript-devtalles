/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    // The private constructors are most used for Singletons

    class Apocalypse {

        static instance : Apocalypse;

        // If the constructor is private, this can only be called from inside the class
        private constructor (
            public name : string
        ){}

        static createInstance():Apocalypse{

            // If an instance of Apocalypse does not exists, create one.
            if(!Apocalypse.instance){
                Apocalypse.instance = new Apocalypse("I'm Apocalypse... The only one.")
            }

            // If does exists, or was created, return it.
            return Apocalypse.instance;
        }

    }

    const apocalypse = Apocalypse.createInstance()

})()
