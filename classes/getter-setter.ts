/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    class Avenger {

        constructor ( 
            public name : string, 
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

        constructor (
            name : string, 
            realName : string,
            public isMutant : boolean,
        ){
            super(name, realName)
            console.log( "Constructor Calling Xmen")
        }

        get fullName(){

            // Getters always return something
            return `${ this.name } - ${ this.realName }`
        }

        // Setter and getter can have the same name.
        set fullName(name : string){

            // Setters can have logic for validations
            if (name.length < 3) {
                throw new Error("The name should be at least 3 characters")
            }
            
            this.name = name;
        }

        public getMutantName(){
            return super.getRealName()
        }
    }


    const wolverine : Xmen = new Xmen( 'Wolverine', 'Logan', true);

    wolverine.fullName = "Lt. Logan"

    console.log( wolverine.fullName ) // -> Is not a property, is a getter, does not have "()"

})()
