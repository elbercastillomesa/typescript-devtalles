(() => {

    const addNumber = (a: number, b: number) => a +b;

    const greet = (name: string) => `Hi ${name}`;

    const saveTheWorld = () => `The world is saved`;

    let myFunction; // by default is "any" type

    myFunction = 10;

    console.log(myFunction); // Prints "10"

    // Assigning the function, without the parentesis won't execute
    myFunction = addNumber;     
    console.log( myFunction(1, 2) ) // Prints "3"
    
    // Assigning the function, without the parentesis won't execute
    myFunction = greet;     
    console.log( myFunction("Adam") ) // Prints "Hi Adam"

    // Assigning the function, without the parentesis won't execute
    myFunction = saveTheWorld;     
    console.log( myFunction() ) // Prints "The world is saved"



    // We should always define the type
    myFunction : Function;

    // myFunction = 10; - Triggers an error because of type

    // We can define even the type of the arguments to 
    // receive and return

    let myTypedFunction1: (y: number, z: number) => number;
    let myTypedFunction2: (x: string) => string;
    let myTypedFunction3: () => string;

    myTypedFunction1 = addNumber; // This works, other fails
    myTypedFunction1 = greet;
    myTypedFunction1 = saveTheWorld;

    myTypedFunction2 = addNumber;
    myTypedFunction2 = greet; // This works
    myTypedFunction2 = saveTheWorld; // This partially works

    myTypedFunction3 = addNumber;
    myTypedFunction3 = greet;
    myTypedFunction3 = saveTheWorld; // This works, other fails

})()