// Composed Types - Enums

/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {
    /**
     * The never type is used when a function wont finalize 
     * their run
     * @param errorMessage string
     */
    const neverFunction = (errorMessage: string) : never => {

        throw new Error(errorMessage)
    }

    neverFunction("Help!")

    /**
     * Here we're enhancing the function to return a number if no
     * error is thrown
     * @param errorMessage string
     * @returns number
     */
    const improvedNeverFunction = (errorMessage: string) : never | number => {

        if (false) {
            throw new Error(errorMessage)
        }

        return 1
    }

    improvedNeverFunction("Help!")

})()