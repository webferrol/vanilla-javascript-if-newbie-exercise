// 2 numeros enteros
    // podemos pasar un número a entero con parseInt


    
// calcular división 
    // Saber si la división es exacta o no




document.querySelector('form').addEventListener(
    'submit',
    function (eventoEnvio) {
        eventoEnvio.preventDefault()

        const num1 = document.querySelector('form [name=op1]').value
        const num2 = document.querySelector('form [name=op2]').value

        const sonNumeros = !isNaN(num1) && !isNaN(num2)
        
        if (!sonNumeros) {
            alert('No numeros')
            return
        }

        const num1Entero = parseInt(num1)
        const num2Entero = parseInt(num2)

        const resto = num1Entero % num2Entero

        if (resto == 0) {
            alert('División exacta')
        } else {
            alert('La división no es exacta')
        }

    }
)

