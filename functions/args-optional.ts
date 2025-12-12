(() => {

    /**
     * The last argument for this function is optional.
     * 
     * @param firstName 
     * @param lastName Using a "?" makes this argument optional"
     * @returns string
     */
    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || 'No last name provided'}`;    
    }

    const name1 = fullName("Tony", "Stark");

    // Now will print "Tony No last name provided"
    const name2 = fullName("Tony");

    console.log( {name1, name2} )

})()