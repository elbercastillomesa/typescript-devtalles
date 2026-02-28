/**
 * The decorators are helper functions for other structures
 * the following is a "Class decorator"
 */
function printToConsole( constructor : Function ) {
    console.log(constructor)    
}

@printToConsole // This will print the whole class code
export class Pokemon {

    public publicAPI:string = "https://pokeapi.co"

    constructor(
        public name: string
    ){}
}