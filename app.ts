/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {
  // Basic Functions
  function addNumbers( a : number, b : number ) : number {
    return a + b;
  }

  const count = ( heroes : string[] ) : number => {
    return heroes.length;
  }

  //! Missed to type the "superHeroes" array
  // const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  const superHeroes : string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  count(superHeroes);

  // Default Params
  //! Missed the return, as the function only does a console, the type is only void
  // const callBatman = ( call : boolean = false) : (string | void) => {
  const callBatman = ( call : boolean = false) : void => {
    if( call ){
      console.log("Batiseñal activada");
    }
  }

  callBatman();

  // Rest?
  //! Missed to use the "..." rest to receive the people arguments
  //! const joinHeroes = ( people : string[] ) : string => {
  const joinHeroes = ( ...people : string[] ) : string => {
    return people.join(", ");
  }

  // Function Type
  const doesNothing = ( 
    isNumber : number, 
    isText : string, 
    isBoolean : boolean, 
    isArray : any[] ) : void => {}

  // Create the type of function that accepts the function "doesNothing"
  //! Missed to type appropiately the arguments and the return
  //! let alsoDoesNothing : Function;
  let alsoDoesNothing : (a: number, b: string, c:  boolean, d: any) => void;
  alsoDoesNothing = doesNothing
  
  })() 
  