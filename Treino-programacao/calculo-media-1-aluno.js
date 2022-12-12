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
    let nota1 = Number(await getInput(`Informe a nota 1 do aluno: `))
    let nota2 = Number(await getInput(`Informe a nota 2 do aluno: `))
    let nota3 = Number(await getInput(`Informe a nota 3 do aluno: `))
    if (nota1 <= 10 && nota1 >= 0 && nota2 <= 10 && nota2 >= 0 && nota3 <= 10 && nota3 >= 0) {
        status(calculo(nota1, nota2, nota3))
        function status(resultado) {
            if (resultado >= 7) {
                console.log("A nota final foi: ", resultado.toFixed(2))
                console.log("Aluno aprovado :)")
            } else {
                console.log("A nota final foi: ", resultado.toFixed(2))
                console.log("Aluno reprovado :(")
            }
        }
    } else {
        console.log("As notas precisão ser todas entre 0 e 10")
    }
    function calculo(num1, num2, num3) {
        return (num1 + num2 + num3) / 3
    }
}

// Chamada da execucao.
program()