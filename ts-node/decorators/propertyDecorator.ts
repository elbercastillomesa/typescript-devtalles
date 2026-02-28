/** 
 * Anothe factory decorator that controls the ability to edit
 * a parameter in a class
 */
function readOnly(isWritable: boolean = true): Function{
    return function (target: any, propertyKey: string) {
        
        const descriptor : PropertyDescriptor = {
            get(){
                console.log( this )
                return "Other value"
            }, 
            set(this, val){
                // console.log(this, val)
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable, // will be false if isWritable is true
                    enumerable: false, // this will hide the property
                })
            }
        }
        
        return descriptor;
    }
}

export class PokemonPrivate {

    @readOnly(true)
    private publicAPI: string = "https://pokeapi.co"

    constructor(
        public name: string
    ) { }

    savePokemonToDB(id: number) {
        console.log(`Pokemon ${this.name} saved to DB ${id}`)
    }
}