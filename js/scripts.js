import { esNumero } from './functions.js'

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
})

function esDivisionExacta(dividendo, divisor) {
    
    if (!esNumero(dividendo) || !esNumero(divisor)) {
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

const controlAnhoActual = document.querySelector('input[name="a1"]')
controlAnhoActual.value = new Date().getFullYear()
controlAnhoActual.disabled = true

function calcularAnhos() {
    let anhoActual = parseFloat(controlAnhoActual.value)
    let anhoCualquiera = parseFloat(document.querySelector('#anhoCualquiera').value)
   
    console.log(anhoActual, anhoCualquiera)
    if (!esNumero(anhoActual) || !esNumero(anhoCualquiera)) {
        alert("Por favor, ingresa años válidos.")
        return
    }

    const diferencia = anhoActual - anhoCualquiera
    const diferenciaAbsoluta = Math.abs(diferencia)

    if (diferencia < 0) {
        alert("Faltan " + diferenciaAbsoluta + " años para llegar a ese año.")
    } else if (diferencia > 0) {
        alert("Han pasado " + diferenciaAbsoluta + " años desde ese año.")
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
    
    if (!esNumero(numero1) || !esNumero(numero2) || !esNumero(numero3)) {
        alert("Por favor, ingresa números en los tres campos.")
        return
    } else {
        if (numero1 === numero2 && numero1 === numero3) {
            alert("Los tres números son iguales.")
        } else if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
            alert("Hay dos números iguales.")
        } else {
            alert("Los tres números son distintos.")
        }
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
        
        if (!esNumero(base) || !esNumero(altura)) {
            alert("Por favor, ingresa valores numéricos válidos.")
        } else {
            let areaTriangulo = 0.5 * base * altura
            alert("El área del triángulo es: " + areaTriangulo)
        }
    } else if (eleccion === 'c') {
        let radio = parseFloat(prompt("Ingresa el radio del círculo:"))
        
        if (!esNumero(radio)) {
            alert("Por favor, ingresa un valor numérico válido.")
        } else {
            let areaCirculo = Math.PI * Math.pow(radio, 2)
            alert("El área del círculo es: " + areaCirculo)
        }
    }
}

document.querySelector('#b4').addEventListener('click', calcularArea)

function evaluarNota() {
    let notaEntradaOriginal = prompt("Ingresa tu nota (formato decimal):")

    if (notaEntradaOriginal != null) {
        let notaRegex = /^\d+(\.\d+)?$/
        if (!notaRegex.test(notaEntradaOriginal)) {
            alert(`${notaEntradaOriginal} no es una nota válida porque no es un número decimal`)
            return
        }

        let nota = parseFloat(notaEntradaOriginal)

        if (isNaN(nota) || nota < 0 || nota > 10) {
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



