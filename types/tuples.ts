// Composed Types - Tuples

/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {
    const hero : [string, number, boolean] = ['Ironman', 100, false];
    /**
     * The type declaration next to the variable x : [a,b]
     * converts this array into a tuple.
     */
 
    //hero[0] = 50; Won't work because the position '0' is for "string"
    //hero[1] = 'Dr Strange' Won't worl because this position is for "number"

    hero[0] = 'Dr Strange';
    hero[1] = 50;
    hero[2] = true;
})()
