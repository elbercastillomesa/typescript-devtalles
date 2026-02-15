(() => {

    interface Client {
        name : string;
        age ?: number;
        // -> This is not recommended, when an interface has multiple levels, is bettter
        // to create an additional interface.
        address_not_recommended ?: { 
            id: number;
            zip: string;
            city: string;
        },
        address ?: Address; // This is better, the main interface goes first, then the nested one.
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client1 : Client = {
        name: "Ferdinand",
        age: 25,
        address: {
            id: 125,
            zip: "10100",
            city: "Mexico City"
        }
    }

    const client2 : Client = {
        name: "Melissa",
        age: 30,        
    }
})()