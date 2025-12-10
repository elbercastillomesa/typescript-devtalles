/* Let's create an anonymus function with autoinvoque (lambda) 
to create various files in the same project using similar names
*/

(() => {

    /**
     * The task is to type correctly the following code
     */

    // Types
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuple
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean]  = ['Lex Lutor',5,true];
  
    // Array
    const aliados:(string)[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enums

    enum HeroPower {
        fuerzaAcuaman = 0,
        fuerzaBatman = 1,
        fuerzaFlash = 5,
        fuerzaSuperman = 100,
    }

    // Function Returns
    function activar_batiseñal(): string {
      return 'activada';
    }
  
    function pedir_ayuda(): void {
      console.log('Auxilio!!!');
    }
  
    // Type Asercions
    const poder: any = '100';
    const largoDelPoder:number = Number(poder.length);
    console.log( largoDelPoder );
  
  })()
  
  