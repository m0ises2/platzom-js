'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
/*
  Este archivo contiene el código fuente del
  módulo traductor del idioma Platzom.
  Este código está escribo en ES2015 o ES6
*/

// Platzom-js:
function platzom(str) {
    var translation = str;

    /*
      Si la palabra original es un palindromo, entonces ninguna
      regla anterior cuenta y se devuelve la misma palabra intercalando
      mayusculas y minusculas:
     */
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    //Función anidada:
    function minMay(str) {
        var lenght = str.length;
        var translation = '';
        var capitalize = true;

        for (var i = 0; i < lenght; ++i) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }

        return translation;
    }

    if (str == reverse(str)) {
        return minMay(str);
    }

    // Si la palabra termina en "ar", se le quitan esos dos caracteres:
    if (str.toLowerCase().endsWith('ar')) {
        /*
          slice(desde, a donde) te permite cortar un string
          desde una posición, hasta otra posición indicada y retorna
          ese string cortado.
         */
        translation = str.slice(0, -2);
    }

    // Si la palabra inicia con Z, se le anhade "pe" al final:
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    /*
      Si la palabra traducida tiene 10 o más letras, se
      debe partir a la mitad y unir con un guión.
    */
    var length = translation.length;

    if (length >= 10) {
        // Se divide la palabra es dos:
        var firsHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2));
        translation = firsHalf + '-' + secondHalf;
    }

    return translation;
}