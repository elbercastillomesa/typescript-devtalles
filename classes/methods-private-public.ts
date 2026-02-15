/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    class Avenger {
        // private name : string; 
        // public team : string;        
        // public realName ?: string;        
        static avgAge : number = 35; 
        
        // Commonly the properties are created directly in te constructor not in the class declaration
        constructor ( 
            private name : string, 
            public team : string, 
            public realName ?: string,
        ) { }

        // If the method does not have an accesability keyword it is public by default
        bio () {
            return `The avenger ${ this.name } is on the team ${ this.team }`
        }

        // When calling this method, the "name" is the name of the Class, not the property name.
        // Other properties will bring an error as static methods works from Class element
        static getAvgAge () {            
            return this.name;            
        }
    }


    const antman : Avenger = new Avenger( 'AntMan', 'Team Cap');

    console.log( antman.bio() )

})()
