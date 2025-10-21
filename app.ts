/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {
    const a = 10; // Wrong!
    let b:number = 20; // Correct!!
    
    function sayHello( msg:string ) {
        console.log(msg)
    }
})()