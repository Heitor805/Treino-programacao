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
   
    // Declaracao das variaveis,
    let valor = Number(await getInput("Informe o valor: "))
    let escolha = String(await getInput("Deseja adicionar outro valor? sim/nao -> "))

        if (escolha == 'sim') {
            let valormais = Number(await getInput("Informe o novo valor: "))
            let resultado = valor + valormais
            console.log('O novo total é:', resultado)
            let pagamento = Number(await getInput("Informe o tipo de pagamento: "))
            // Atribuicao
            switch (pagamento) {
                case 1:
                    var total = resultado*0.9
                    console.log('O total do produto foi:', total)
                    break
                case 2:
                    var total = resultado*0.95
                    console.log('O total do produto foi:', total)
                    break
                case 3:
                    let cartão = Number(await getInput("Informe o cartão: "))
                        if (cartão == 1) {
                            var total = resultado*1.05
                            console.log('O total do produto foi:', total)
                        } else if (cartão == 2) {
                            var total = resultado*1.20
                            console.log('O total do produto foi:', total)
                        } else {
                            console.log('O cartão deve ser crédito ou débito')
                        }
                    break
                case 4:
                    let cartao = Number(await getInput("Informe o cartão: "))
                        if (cartao == 1) {
                            var total = resultado*1.05
                            console.log('O total do produto foi:', total)
                        } else if (cartao == 2) {
                            var total = resultado*1.20
                            console.log('O total do produto foi:', total)
                        } else {
                            console.log('O cartão deve ser crédito ou débito')
                        }
                    break
                default:
                    console.log('O pagamento deve ser feito em dinheiro, cheque ou cartão')
            }
        } else if (escolha == 'nao') {
            let pagamento = Number(await getInput("Informe o tipo de pagamento: "))
            // Atribuicao
            switch (pagamento) {
                case 1:
                    var total = valor*0.9
                    console.log('O total do produto foi:', total)
                    break
                case 2:
                    var total = valor*0.95
                    console.log('O total do produto foi:', total)
                    break
                case 3:
                    let cartão = Number(await getInput("Informe o cartão: "))
                        if (cartão == 1) {
                            var total = valor*1.05
                            console.log('O total do produto foi:', total)
                        } else if (cartão == 2) {
                            var total = valor*1.20
                            console.log('O total do produto foi:', total)
                        } else {
                            console.log('O cartão deve ser crédito ou débito')
                        }
                    break
                case 4:
                    let cartao = Number(await getInput("Informe o cartão: "))
                        if (cartao == 1) {
                            var total = valor*1.05
                            console.log('O total do produto foi:', total)
                        } else if (cartao == 2) {
                            var total = valor*1.20
                            console.log('O total do produto foi:', total)
                        } else {
                            console.log('O cartão deve ser crédito ou débito')
                        }
                    break
                default:
                    console.log('O pagamento deve ser feito em dinheiro, cheque ou cartão')
            }
        } else {
            console.log('Responda com sim ou nao')
        }
}
    
    
    // Chamada da execucao.
    program()