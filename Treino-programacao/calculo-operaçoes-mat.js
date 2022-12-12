/**
 * Captura inputs do usuÃ¡rio pelo CLI (command line interface)
 * @param {string} message - Mensagem informada no input
 * @returns {Promise} - Retorna o valor capturado
 */
 const getInput = (message) => {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

    return new Promise((resolve, reject) => {
        if(!message) reject('Mensagem invÃ¡lida!')

        rl.question(message, (answer) => {
            rl.close()
            resolve(answer)
        })
    })
}

/**
 * Estrutura que executa as instrucoes do programa
 */
async function program() {
    
    // Declaracao das variaveis
    let num1 = Number(await getInput(`Informe o número 1: `))
    let num2 = Number(await getInput(`Informe o número 2: `))
    let sinal = String(await getInput(`Informe o tipo de calculo deseja, + ou soma, - ou  subtração, * ou multiplicação, / ou divisão: `))
    calculo(num1, num2, sinal)
    function calculo(num1, num2, sinal) {
        switch (sinal) {
            case "soma", "+":
                console.log('O resultado do calculo foi: ', soma(num1, num2))
                break
            case "subtração", "-":
                console.log('O resultado do calculo foi: ', subtraçao(num1, num2))
                break
            case "multiplicação", "*":
                console.log('O resultado do calculo foi: ', multiplicaçao(num1, num2))
            break
            case "divisão", "/":
                console.log('O resultado do calculo foi: ', divisao(num1, num2))
            break
           default:
                console.log('Favor escreva soma, +, subtração, -, multiplicação, * ou  divisão, /')
        }
    }
    function soma(num1, num2) {
        return num1 + num2
    }
    function subtraçao(num1, num2) {
        return num1 - num2
    }
    function multiplicaçao(num1, num2) {
        return num1 * num2
    }
    function divisao(num1, num2) {
        return num1 / num2
    }
}

// Chamada da execucao.
program()