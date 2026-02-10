/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    type Avengers = { 
        name: string, 
        weapon: string,
    }

    const ironman:Avengers = {
        name: "Tony Stark",
        weapon: "Armorsuit"
    }

    const captainAmerica:Avengers = {
        name: "Steve Rogers",
        weapon: "Shield"
    }

    const thor:Avengers = {
        name: "Thor Odinson",
        weapon: "Mjolnir"
    }

    const avengers:Avengers[] = [ironman, thor, captainAmerica];

    // The cycle "for-of" allows us to work better with arrays and objects

    for (const avenger of avengers) {
        console.log(avenger.name.toUpperCase(), avenger.weapon)
    }
})()
