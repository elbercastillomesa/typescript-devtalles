// Primitive Types - Strings

/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    const batman:string = 'Batman';
    const greenLantern:string = "Green Lantern";
    const superman:string = `Superman`;

    let testNumber:number = 123;

    console.log (`I'm ${ batman }`);

    console.log( greenLantern.toUpperCase() );

    console.log (`Almost this number ${ testNumber } for ${ superman }`);

    console.log( batman[10].toUpperCase() ) // This will trigger an error because batman[10] is undefined

    console.log( batman[10]?.toUpperCase() ) // The null check will avoid the previous error.

    console.log( batman[10]?.toUpperCase() || 'No value' ) // Returns a string if batman[10] is undefined


})()
