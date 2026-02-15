(() => {

    interface Client {
        name : string;
        age ?: number;
        address ?: Address;

        // When a class extends from this interface, should implement this method.
        getFullAddress(id: string) : void;
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
        },

        getFullAddress(id : string) {
            return this.address;
        }
    }

    const client2 : Client = {
        name: "Melissa",
        age: 30,

        getFullAddress(id : string) {
            return {
                id: 55,
                zip: "760023",
                city: "Cali"
            };
        }
    }
})()