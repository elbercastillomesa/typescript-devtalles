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
    }


    const antman : Avenger = new Avenger( 'AntMan', 'Team Cap');

})()
