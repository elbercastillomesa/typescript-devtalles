// Primitive Types - Numbers

/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    let avengers:number = 10;
    const villians:number = 20;

    if (villians > avengers){
        console.log("We're doom!")
    } else {        
        console.log("We're safe!")
    }

    avengers = Number('55A') // This is a NaN, which is still a number.

})()