/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

  // Create Interfaces

  interface Mobile {
    start: boolean;
    maxSpeed: number;
    accelerate(): void;
  }

  // Create an interface to validate the car (the value sent by parameter)
  const conducirBatimovil = (auto: Mobile): void => {
    auto.start = true;
    auto.maxSpeed = 100;
    auto.accelerate();
  }

  const batimovil: Mobile = {
    start: false,
    maxSpeed: 0,
    accelerate() {
      console.log("...... gogogo!!!");
    }
  }

  // Create an interface that allows to use the following object with
  // optional parameters

  interface Joker {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
  }

  const guason: Joker = {
    reir: true,
    comer: true,
    llorar: false
  }

  const reir = (guason: Joker): void => {
    if (guason.reir) {
      console.log("JAJAJAJA");
    }
  }


  // Create an interface for the following function

  interface City {
    (citizens: string[]): number
  }

  const ciudadGotica: City = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  }

  // Create an interface that forces the use of the following class
  // with the appropiate methods and properties

  /*
    properties:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // print a brief description in console
  */

  interface Person {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;

    imprimirBio(): void;
  }


  class Persona implements Person {
    public nombre: string;
    public edad: number;
    public sexo: string;
    public estadoCivil: string;

    constructor(
      nombre: string,
      edad: number,
      sexo: string,
      estadoCivil: string
    ) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
      this.estadoCivil = estadoCivil;
    }

    imprimirBio(): void {
      console.log(`Here's a brief description for ${this.nombre}`)
    }
  }
})()
