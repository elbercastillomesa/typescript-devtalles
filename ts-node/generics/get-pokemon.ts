import axios from "axios";
import { config } from "node:process";
import { Pokemon } from "../interfaces";


export const getPokemon = async(pokemonId: number) : Promise<Pokemon> => {

    // We're using the generic Pokemon from the interfaces folder to have the ability to 
    // manage the options we decide from the interface (and we know still come from the api call)
    // The data that comes from the api Call is not edited nor changed.
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`)
    
    return data;
}