import { getPokemon } from "../generics/get-pokemon";


getPokemon(1)
    .then( 
        pokemon => console.log(pokemon.name, pokemon.sprites.front_default) 
    )
    .catch( error => console.error(error))
    .finally( () => console.log("End of getPokemon") )