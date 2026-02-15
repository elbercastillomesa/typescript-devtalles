/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    class Avenger {

        constructor ( 
            private name : string, 
            public realName : string,
        ) { 
            console.log("Constructor Calling Avenger")
        }

        private getFullName(){
            return `${ this.name } ${ this.realName }`
        }

        protected getRealName(){
            return `${ this.realName }`
        }
    }

    class Xmen extends Avenger {

        // When extending a class, and using a constructor, is needed to use a "super" to
        // manage parent constructor.

        constructor (

            // The properties from the parent Class should be added without class
            // because the class is already defined in the parent Class
            name : string, 
            realName : string,
            public isMutant : boolean,
        ){
            super(name, realName)
            console.log( "Constructor Calling Xmen")
        }

        public getMutantName(){
            // As "getFullName" is a private method, it is not accesible from outside the class
            // return super.getFullName()

            // As "getRealName" is a protected method, it is accesible from other classes whose extend parent Class
            return super.getRealName()
        }

    }


    const wolverine : Xmen = new Xmen( 'Wolverine', 'Logan', true);

    console.log( wolverine )

    // Property 'getFullName' is private and only accessible within class 'Avenger'
    // wolverine.getFullName()

    wolverine.getMutantName()

})()
