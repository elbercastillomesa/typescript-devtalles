/**
 * THis is a decorator to block the prototype of a class, which 
 * will avoid it to be expanded or modified.
 */
const blockPrototype = function ( constructor : Function ) {
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}

@blockPrototype
export class ExamplePokemon {

    public publicAPI:string = "https://pokeapi.co"

    constructor(
        public name: string
    ){}
}