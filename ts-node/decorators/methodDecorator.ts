/**
 * This will be Factory decorator applied to a method, 
 * to check that only positive numbers are passed as id
 */
function checkValidId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        // We need to save the original method to be able to call it later in the if-else
        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if (id < 1 || id > 850) {
                return console.error("The provided ID is not valid.")
            }
            else {
                originalMethod(id);
            }
        }
    }
}

export class PokemonDB {

    public publicAPI: string = "https://pokeapi.co"

    constructor(
        public name: string
    ) { }

    @checkValidId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon ${this.name} saved to DB ${id}`)
    }
}