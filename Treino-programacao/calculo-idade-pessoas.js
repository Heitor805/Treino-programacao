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
    let informaçoes = []
    let nome = []
    let pessoa = []
    let nome1 = String(await getInput(`Informe o NOME da primeira pessoa: `))
    let idade = Number(await getInput(`Informe a IDADE da primeira pessoa: `))
    let traço = ": "
    let pessoa1 = nome1 + traço + idade
    informaçoes.push(pessoa1)
    let pergunta = String(await getInput(`Deseja adicionar mais pessoas? sim/nao: `))
    let numeropessoa = 1
    while (pergunta == 'sim' || pergunta == 's' || pergunta == 'S') {
        for (i = 1; i <= numeropessoa; i++) {
            numeropessoa++
            nome[i] = String(await getInput(`Informe o NOME da pessoa número ${numeropessoa}: `))
            idade2 = Number(await getInput(`Informe a IDADE do/a ${nome[i]}: `))
            pessoa[i] = nome[i] + traço + idade2
            informaçoes.push(pessoa[i])
            idade += idade2
            pergunta = String(await getInput(`Deseja adicionar mais pessoas? sim/nao: `))
            if (pergunta == 'nao' || pergunta == 'não' || pergunta == 'n' || pergunta == 'N') {
                numeropessoa -= 2 
            }
        }
    } if (pergunta == 'nao' || pergunta == 'não' || pergunta == 'n' || pergunta == 'N') {
        funcao(idade)
        categoria(media)
    } else {
        console.log("Por favor escrever 'sim' ou 'não' para o código funfar")
    }
    function funcao(idade) {
        media = idade / numeropessoa
        console.log("A média de idade de todas as pessoas é: ", media.toFixed(2))
    }
    function categoria(media) {
        if (media >= 5 && media <= 7) {
            console.log("A maioria dos indivíduos são: Infantils A")
            console.log("Aqui estão todas as informações coletadas: ", informaçoes)
        } else if (media > 7 && media <= 10) {
            console.log("A maioria dos indivíduos são: Infantils B")
            console.log("Aqui estão todas as informações coletadas: ", informaçoes)
        } else if (media > 10 && media <= 13) {
            console.log("A maioria dos indivíduo são: Juvenis A")
            console.log("Aqui estão todas as informações coletadas: ", informaçoes)
        } else if (media > 13 && media <= 17) {
            console.log("A maioria dos indivíduos são: Juvenis B")
            console.log("Aqui estão todas as informações coletadas: ", informaçoes)
        } else {
            console.log("A maioria dos indivíduos são: Adultos")
            console.log("Aqui estão todas as informações coletadas: ", informaçoes)
        }
    }
}   

// Chamada da execucao.
program()