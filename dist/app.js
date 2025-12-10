"use strict";
/* Let's create an anonymus function with autoinvoque (lambda)
to create various files in the same project using similar names
*/
(function () {
    /**
     * The task is to type correctly the following code
     */
    // Types
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuple
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Array
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enums
    var HeroPower;
    (function (HeroPower) {
        HeroPower[HeroPower["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        HeroPower[HeroPower["fuerzaBatman"] = 1] = "fuerzaBatman";
        HeroPower[HeroPower["fuerzaFlash"] = 5] = "fuerzaFlash";
        HeroPower[HeroPower["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(HeroPower || (HeroPower = {}));
    // Function Returns
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Type Asercions
    var poder = '100';
    var largoDelPoder = Number(poder.length);
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map