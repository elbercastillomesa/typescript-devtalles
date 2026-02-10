/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    /*
    * We should always user "let" for variables, the "var" keyword has unusual behaviour and should
    * be avoided in Ts, also, the "const" is prefered for all elements until we know they will change. 
    * 
    * The functions have the preference to use "const" as once they have been built and run, they 
    * shouldn't change.
    */

    const nombre : string = "Ferdinand"
    const getName = function () : void {} // Or use an arrow function

})()
  