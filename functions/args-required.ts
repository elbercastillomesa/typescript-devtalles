(() => {

    /**
     * Both arguments for this function are mandatory.
     * 
     * @param firstName 
     * @param lastName 
     * @returns string
     */
    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;    
    }

    const name1 = fullName("Tony", "Stark");

    // This triggers and error because lastName is required
    const name2 = fullName("Tony");

    // This triggers and error because lastName should be a string
    const name3 = fullName("Tony", false);

    
    // This "works" but is incorrect, please be careful
    let noName: any;
    const name4 = fullName("Tony", noName); 

    console.log( {name1, name2, name3, name4} )

})()