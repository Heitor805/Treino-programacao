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
    let preco = []
    let soma = 0
    // Declaracao das variaveis
    for (i = 1; i <= 5; i++) {
        preco[i] = Number(await getInput("Informe o preço: "))
        soma = (soma + preco[i])
    }
    let media = soma / 5
    console.log('A média do preço foi:', media)
    
    for (i = 0; i <= 5; i++) {
        if (preco[i] > media) {
            console.log(`O valor ${i}...${preco[i]} é maior que a media, `, media)
        }
    }
}

// Chamada da execucao.
program()