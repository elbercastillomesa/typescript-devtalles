/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    class Avenger {
        // Private property is not accesible from outside the class
        private name : string; 
        // Public declaration is optional but recommended
        public team : string;
        // Using "?:" allow to create optional properties
        public realName ?: string;
        // Like other OOP languages, static should be used from the Class declaration not from the instance
        static avgAge : number = 35; 

        // Using "?:" allow the property to be optional
        constructor (name : string, team : string, realName ?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    // As the realName property is optional, the following line will work
    const antman : Avenger = new Avenger( 'AntMan', 'Team Cap');

})()
