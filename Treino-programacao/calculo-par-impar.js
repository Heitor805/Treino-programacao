/**let i = 6
let nome = "Eu mesmo"
if (i <10) {
    for (i==1; i<=10; i++) {
        console.log(i)
    }
    console.log('Esses são os números entre oq vc digitou para o 10,', nome)
} else {
    console.log('Digite um valor menor que 10')
}*/

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
        if(!message) reject('Mensagem inválida!')

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
    let numberOne = Number(await getInput("Number one: "))
    const numberTwo = Number(await getInput("Number two: "))
    // Atribuicao
    let somaPar = 0
    let somaImpar =0

    // Colocar o cÃ³digo a ser executado
    while (numberOne <= numberTwo ){
        if(numberOne%2){
            somaImpar+= numberOne
        }else{
            somaPar= numberOne + somaPar
        }
        numberOne++
    }

    // Impressao dos resultados
    console.log('Par',somaPar)
    console.log('Impar',somaImpar)

}


// Chamada da execucao.
program()