/**
 * Captura inputs do usuário pelo CLI (command line interface)
 * @param {string} message - Mensagem informada no input
 * @returns {Promise} - Retorna o valor capturado
 */
const getInput = (message) => {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        if (!message) reject('Mensagem invalida!')

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
    let cpf = []
    console.log('Qual seu CPF, digite número por número')
    cpf = await getInput("Número do CPF: ")
    let somatorio = 10
    let soma = 0
    let res = 0
    console.log(cpf)
    
    //Colocar o codigo a ser executado
    for (i = 0; i <= 8; i++) {
        num = cpf[i] * somatorio
        somatorio -= 1
        soma += num

        //num1[i] = 11 - res
        //    if (num1[i] >= 10) {
        //        num1[i] = 0
        //    }
        //}
        //num1.push(cpf[9])
        //num1.push(cpf[10])
        //console.log('O seu novo CPF é:', num1) 
    }
    for (i = 0; i <= 0; i++){
    res = soma % 11
    cpf.push(res[11])
    console.log(cpf)
    }
}

// Chamada da execucao.
program()