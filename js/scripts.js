// 2 numeros enteros
    // podemos pasar un número a entero con parseInt    
// calcular división 
    // Saber si la división es exacta o no


    function handleDivisionExacta(num1, num2) {
        const num1Entero = parseInt(num1)
        const num2Entero = parseInt(num2)   
    
        if (num2Entero === 0) {
            alert('No se puede dividir por cero')
            return 
        }
        
        const resto = num1Entero % num2Entero
        
        if (resto === 0) {
            alert('División exacta')
        } else {
            alert('La división no es exacta')
        }
    }
    
    
    document.querySelector('form').addEventListener(
        'submit',
        function (eventoEnvio) {
            eventoEnvio.preventDefault()
    
            const num1 = document.querySelector('form [name=op1]').value.trim()
            const num2 = document.querySelector('form [name=op2]').value.trim()
    
            const sonNumeros = !isNaN(Number.parseFloat(num1)) && !isNaN(Number.parseFloat(num2))
    
            if (!sonNumeros) {
                return 
            }
    
            handleDivisionExacta(num1, num2)
        }
    )
    
    