(() => {

    /**
     * The "upper" argument is optional, and given by default
     * 
     * @param firstName 
     * @param lastName Using a "?" makes this argument optional"
     * @param upper Boolean to convert to uppercase, by default is false
     * @returns string
     */
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        
        if (upper) {
            return `${firstName} ${lastName || 'No last name provided'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || 'No last name provided'}`;
        }        
    }

    const name1 = fullName("Tony", "Stark");

    // Now will print "Tony No last name provided"
    const name2 = fullName("Tony");

    // This prints: "TONY STARK"
    const name3 = fullName("Tony", "Stark", true);

    // This is an error because the order of arguments
    const name4 = fullName("Tony", true)

    console.log( {name1, name2, name3, name4} )

})()