const { Console } = require('console');

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
    let vetor = []
    for (i = 1; i <= 247; i++) {
    let I = "I"
    let J = "J"
    let K = "K"
    let L = "L"
    let M = "M"
    vetor.push(I)
    vetor.push(J)
    vetor.push(K)
    vetor.push(L)
    vetor.push(M)
    }
    console.log(vetor)
    console.log(vetor[247])
}

// Chamada da execucao.
program()