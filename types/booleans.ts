// Primitive Types - Boolean

/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    let isSuperman:boolean = true;
    let isBatman:boolean = false;

    isSuperman = true && false;

    isBatman = (isSuperman) ? false : true;

})()