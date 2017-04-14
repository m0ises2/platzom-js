const expect = require('chai').expect
/*
    Ahora requerimos el módulo que queremos probar
    Se le coloca .. y automáticamente cargará el main
    file que esté especificado en el package.json
*/
const platzom = require('..').default

describe('#platzom-js', function () {
  it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function () {
    const translation = platzom("Programar")
    
    expect(translation).to.equal("Program")
  })

  it('Si la palabra inicia con Z, se le anhade "pe" al final', function () {
    const translation = platzom("zorro")
    const translation2 = platzom("zarpar")

    expect(translation).to.equal("zorrope")
    expect(translation2).to.equal("zarppe")
  })

  it('Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión.', function () {
    const translation = platzom("abecedario")

    expect(translation).to.equal("abece-dario")
  })

  it('Si la palabra original es un palindromo, entonces ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas', function () {
    const translation = platzom("sometemos")

    expect(translation).to.equal("SoMeTeMoS")
  })
})
