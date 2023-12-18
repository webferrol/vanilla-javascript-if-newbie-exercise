document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
})

function esDivisionExacta(dividendo, divisor) {
    
    if (isNaN(dividendo) || isNaN(divisor)) {
        alert("Por favor, ingresa números enteros válidos.")
        return
    }

    if (divisor === 0) {
        throw new Error(`No se puede dividir por cero`)
    }
    
    let resultadoDivision = dividendo / divisor
    let resto = dividendo % divisor

    if (resto === 0) {
        alert(`El resultado de la división es ${resultadoDivision} y esta es exacta`)
    } else {
        alert(`El resultado de la división es ${resultadoDivision} y esta no es exacta`)
    }
}

function calcularDivision() {
    let dividendo = parseFloat(document.querySelector('input[name="op1"]').value)
    let divisor = parseFloat(document.querySelector('input[name="op2"]').value)

    esDivisionExacta(dividendo, divisor)
    
}

document.querySelector('#b1').addEventListener('click', calcularDivision)

function calcularAnhos() {
    let anhoActual = parseInt(document.querySelector('input[name="a1"]').value)
    let anhoCualquiera = parseInt(document.querySelector('#anhoCualquiera').value)
    
    if (isNaN(anhoActual) || isNaN(anhoCualquiera)) {
        alert("Por favor, ingresa años válidos.")
        return
    }

    if (anhoActual !== new Date().getFullYear) {
        alert("Por favor, introduzca el año actual")
        return
    }

    if (anhoCualquiera > anhoActual) {
        alert("Faltan " + (anhoCualquiera - anhoActual) + " años para llegar a ese año.")
    } else if (anhoCualquiera < anhoActual) {
        alert("Han pasado " + (anhoActual - anhoCualquiera) + " años desde ese año.")
    } else {
        alert("Los años son iguales.")
    }
}

document.querySelector('#b2').addEventListener('click', calcularAnhos);

function comprobarNumeros() {
    let str1 = document.querySelector('input[name="n1"]').value
    let str2 = document.querySelector('input[name="n2"]').value
    let str3 = document.querySelector('input[name="n3"]').value

    if (!str1 || !str2 || !str3) {
        alert("Por favor, Rellena los tres campos de texto")
        return
    }

    let numero1 = Number(str1)
    let numero2 = Number(str2)
    let numero3 = Number(str3)
    
    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
        if (numero1 === numero2 && numero1 === numero3) {
            alert("Los tres números son iguales.")
        } else if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
            alert("Hay dos números iguales.")
        } else {
            alert("Los tres números son distintos.")
        }
    } else {
        alert("Por favor, ingresa números en los tres campos.")
    }
}

document.querySelector('#b3').addEventListener('click', comprobarNumeros)


function calcularArea() {
    let eleccion = prompt("¿Quieres calcular el área de un triángulo (T) o un círculo (C)?").toLowerCase()

    if (eleccion !== 't' && eleccion !== 'c') {
        alert("Opción no válida. Por favor, ingresa 'T' o 'C', en mayúscula o minúscula, para calcular el área.")
        return
    }
    
    if (eleccion === 't') {
        let base = parseFloat(prompt("Ingresa la base del triángulo:"))
        let altura = parseFloat(prompt("Ingresa la altura del triángulo:"))
        
        if (!isNaN(base) && !isNaN(altura)) {
            let areaTriangulo = 0.5 * base * altura
            alert("El área del triángulo es: " + areaTriangulo)
        } else {
            alert("Por favor, ingresa valores numéricos válidos.")
        }
    } else if (eleccion === 'c') {
        let radio = parseFloat(prompt("Ingresa el radio del círculo:"))
        
        if (!isNaN(radio)) {
            let areaCirculo = Math.PI * Math.pow(radio, 2)
            alert("El área del círculo es: " + areaCirculo)
        } else {
            alert("Por favor, ingresa un valor numérico válido.")
        }
    }
}

document.querySelector('#b4').addEventListener('click', calcularArea)

function evaluarNota() {
    let notaEntradaOriginal = prompt("Ingresa tu nota (formato decimal):")

    if (notaEntradaOriginal != null) {
        let nota = parseFloat(notaEntradaOriginal)
    
        if (isNaN(nota)) {
            alert(`${notaEntradaOriginal} no es una nota válida porque no es un número`)
            return
        } else if( nota < 0 || nota > 10) {
            alert(`La nota ${nota} no es válida porque no está entre 0 y 10`)
            return
        }
    
        if (nota < 3) {
            alert("No llegas")
        } else if (nota < 5) {
            alert("Casi")
        } else if (nota >= 5 && nota <= 7) {
            alert("Bien")
        } else {
            alert("Very Well")
        }
    }
}

evaluarNota();



