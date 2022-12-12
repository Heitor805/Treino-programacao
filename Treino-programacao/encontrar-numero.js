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
    let num = []
    // Declaracao das variaveis
    for (i = 0; i <= 4; i++) {
        num[i] = Number(await getInput("Informe os seus números: "))
    }
    console.log('Os números informados foram:', num)
    console.log('Quais números deseja procura?')
    let busca = Number(await getInput("Informe os seus números: "))
    let posicao = 0

    for (i = 0; i <= 4; i++) {
        posicao = i + 1
        if (num[i] == busca) {
            console.log(`O número ${num[i]} está na posição ${posicao}`)
        }
    }
    let errado = -1
    if (busca == errado) {
        console.log('O número pesquisado não foi encontrado')
    } else {
        console.log('O número foi encontrado na posição informada:', posicao)
    }
}

// Chamada da execucao.
program()