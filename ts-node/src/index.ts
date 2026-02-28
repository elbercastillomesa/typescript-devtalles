import { Pokemon } from "../decorators/classDecorator";
import { Digimon } from "../decorators/factoryDecorator";
import { ExamplePokemon } from "../decorators/blockDecorator";
import { PokemonDB } from "../decorators/methodDecorator";
import { PokemonPrivate } from "../decorators/propertyDecorator";

const bulbasaur = new Pokemon("Bulbasaur");
console.log(bulbasaur)

const agumon = new Digimon("Agumon");
console.log(agumon)

const charmander = new ExamplePokemon("Charmander");
/**
 * This would change the class prototype to include a "customName" param 
 * with value of "Charizard", as the decorator has been "blocked", this
 * edition won't be performed and the class will be intact.
 */
(ExamplePokemon.prototype as any).customName = 'Charizard';
console.log(charmander)

const pikachu = new PokemonDB("Pikachu");
pikachu.savePokemonToDB(25);
console.log(pikachu)


const mewtwo = new PokemonPrivate("Mewtwo");
/**
 * Although is a private parameter, this would edit the 
 * API route, damagin the class declaration
 */
// mewtwo.publicAPI = "https://pokemondb.net/pokedex/mewtwo"
console.log(mewtwo)