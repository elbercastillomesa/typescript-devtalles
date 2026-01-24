/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

  // Objects Types

  type Vehicle = {
    bodywork: string,
    model: string,
    bulletproof: boolean,
    passengers: number,
    shoot?: ()=> void, // Console a "string" but returns nothing
  }

  // Objects
  const batmobile : Vehicle = {
    bodywork: "Black",
    model: "6x6",
    bulletproof: true,
    passengers: 4
  };

  const bumblebee : Vehicle = {
    bodywork: "Yellow and Black",
    model: "4x2",
    bulletproof: true,
    passengers: 4,
    shoot() { // Shoot method is optional
      console.log("Shooting");
    }
  };

  // Villans Types
  type Villan = {
    name: string,
    age: number | undefined,
    mutation: boolean,
  };

  type Villans = Villan[]; 
  /*
  type Villans = Villan[]; -> Instead of this we should use

  const villans : Villan[] {
    ...
  }
  */

  // Villans should be and array of custom objects
  // const villans : Villan[]
  const villans : Villans = [{
    name: "Lex Luthor",
    age: 54,
    mutation: false
  }, {
    name: "Erik Magnus Lehnsherr",
    age: 49,
    mutation: true
  }, {
    name: "James Logan",
    age: undefined,
    mutation: true
  }];

  // Multi Types
  // Create two types, one for Charles and other for Apocalypse

  type Charles = {
    power: string,
    height: number,
  };

  type Apocalypse = {
    leader: boolean,
    members: string[]
  }


  const charles : Charles = {
    power: "psiquico",
    height: 1.78
  };

  const apocalipsis : Apocalypse = {
    leader: true,
    members: ["Magneto", "Tormenta", "Psylocke", "Angel"]
  }

  // Mystique, should be any of the previous mutants ( Charles or Apocalypse)
  let mystique : Charles | Apocalypse;

  mystique = charles;
  mystique = apocalipsis;


})()
