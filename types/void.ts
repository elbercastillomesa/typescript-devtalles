// Composed Types - Enums

/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    function callSuperman() {
    }

    const a = callSuperman()

    console.log(a) // This returns an "undefined" by default

    /**********/

    function callBatman () : void {
        // return 1; It's not valid because collides with void
    }

    const b = callBatman()

    console.log(b) // Now this returns a "void"

    const callWonderWoman = () : void => {
        return; // Altough has a return, it's valid if not 
        // value is assigned because it's interpreted as a "void"
    }   
  
})()