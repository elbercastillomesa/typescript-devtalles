import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Hero, Villain } from "../interfaces"; // ---> Grouped imports

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
}

// Generics functions are the type that can receive any tipe of armgument

printObject( 123 );
printObject( new Date() );
printObject( "This is a String" );
printObject( { a: 1, b: 2, c: 3 } );


console.log( genericFunction(3.1416).toFixed(2) )
// console.log( genericFunction("Hello World").toFixed(2) ) -> This triggers an error
// because the input type string does not have "toFixed" method

console.log( genericFunction( new Date() ).getFullYear() )

console.log( genericFunctionArrow( "Hello World!" ).toLocaleUpperCase() )

/********/

const deadppol = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Hero>( deadpool ).realName )