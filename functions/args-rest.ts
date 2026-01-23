(() => {

    /**
     * The restArgs param captures all the additional strings 
     * provided to the function, so only firstName is mandatory
     * 
     * @param firstName 
     * @param restArgs
     * @returns string
     */
    const fullName = (firstName: string, ...restArgs : string[]): string => {
        
        return `${firstName} ${restArgs.join(' ')}`;
        
    }

    const name1 = fullName("Clark", "Kent");
    
    const name2 = fullName("Clark", "Joseph", "Kent");
    
    const name3 = fullName("Tony", "Stark");

    console.log( {name1, name2, name3} )

})()