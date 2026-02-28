/**
 * This is a "Factory decorator"
 */
const printToConsoleCOnditional = (print: boolean = false) : Function => {
    if (print) {
        // This returns the function, does not execute it (missing parenthesis)
        return printToConsole 
    } else {
        return () => {}
    }
}

function printToConsole( constructor : Function ) {
    console.log(constructor)    
}

@printToConsoleCOnditional( true )
export class Digimon {

    public publicAPI:string = "https://digi-api.com"

    constructor(
        public name: string
    ){}
}
