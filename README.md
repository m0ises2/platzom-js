# Platzom-js

Platzom es un idioma creado en el curso de [Fundamentos de JavaScript](https://platzi.com/cursos/fundamentos-javascript/) de [Platzi](https://platzi.com).

## Descripción del idioma
- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Instalación
```
npm install platzom-js
```

## Uso
```
import platzom from 'platzom-js'

platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

## Créditos
- [Moisés Alvarado](https://github.com/m0ises2)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
