/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    const avengers: { nick: string, ironman: string, vision: string, active: boolean, power: number } = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        active: true,
        power: 1500.123,
    }

    // From "avenger", we can destructure to get only the data we require: 

    const { power, vision } = avengers
    console.log(power.toFixed(2), vision.toUpperCase())

    // We should use a "type" if were planning to use this object in functions or in more detailed envs

    /* this gives error as the type is implicit (any) 
    
    const printAvenger = (avengers): void => {
        console.log(avengers.vision)
    }
    
    */

    // THE FIX: 

    type Avengers = { 
        nick: string, 
        ironman: string, 
        vision: string, 
        active: boolean, 
        power: number 
    }

    const printAvenger = (avengers:Avengers): void => {
        console.log(avengers.vision)
    }

    printAvenger(avengers);

    // Destructuring with "..." rest argument
    const destructAvengers = ({vision, ...other_rest}:Avengers): void => {
        
        console.log(vision)
        console.log(other_rest)
    }

    destructAvengers(avengers);

    const avengersArray:string[] = ['Cap. America', 'Ironman', 'Hulk']
    const ironman:string = avengersArray[1];
    console.log( {ironman} )

    // Altough is correct, the syntax is too long. We can try destructuring from arrays.

    const [, , hulk] = avengersArray[1];
    console.log( {hulk} )

    // When destructuring from arrays, the order is most important, also the type, 
    // try to have in mind those two and always declare types.

})()
