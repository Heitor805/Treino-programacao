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
    let numeropessoa = 1
    let informaçoes = []
    let imcs = []
    let nome = String(await getInput(`Escreva aqui o nome da pessoa n°${numeropessoa}: `))
    let peso = Number(await getInput(`Escreva aqui o peso da pessoa n°${numeropessoa}: `))
    let altura = Number(await getInput(`Escreva aqui o altura da pessoa n°${numeropessoa}: `))
    let humano = 'Nome: ' + nome + ' / ' + 'Peso: ' + peso + ' / ' + 'Altura: ' + altura
    informaçoes.push(humano)
    let pergunta = String(await getInput(`Você deseja adicionar mais pessoas? sim/nao: `))
    switch (pergunta) {
        case "s" || "sim" || "Sim" || "SIM" || "S": 
        while (pergunta == 'sim' || pergunta == 's' || pergunta == 'S' || pergunta == 'SIM' || pergunta == 'Sim') {
            for (i = 1; i <= numeropessoa; i++) {
                numeropessoa++
                let nome1 = String(await getInput(`Escreva aqui o nome da pessoa n°${numeropessoa}: `))
                let peso1 = Number(await getInput(`Escreva aqui o peso da pessoa n°${numeropessoa}: `))
                let altura1 = Number(await getInput(`Escreva aqui o altura da pessoa n°${numeropessoa}: `))
                let humano1 = 'Nome: ' + nome1 + ' / ' + 'Peso: ' + peso1 + ' / ' + 'Altura: ' + altura1
                informaçoes.push(humano1)
                pergunta = String(await getInput(`Deseja adicionar mais pessoas? sim/nao: `))
                let imc1 = peso1 / (altura1 * altura1)
                let humano2 = `O IMC da/o ${nome1} é de: ` + imc1.toFixed(2) + `, A situação dessa pessoa está: ` + calculo(imc1)
                imcs.push(humano2)
                if (pergunta == 'nao' || pergunta == 'não' || pergunta == 'n' || pergunta == 'Não' || pergunta == 'NÃO') {
                    numeropessoa -= 1
                }
            }
        }
        case "n" || "nao" || "N" || "não" || "Não" || "NÃO":
            let imc = peso / (altura * altura)
            let humano3 = `O IMC da/o ${nome} é de: ` + imc.toFixed(2) + `, A situação dessa pessoa está: ` + calculo(imc)
            imcs.unshift(humano3)
            console.log(`Aqui estão todas as informações coletadas: `, informaçoes)
            console.log(imcs)
            break
        default: 
            console.log("Favor escreva 's', 'sim', 'Sim' ou 'n', 'nao', 'não', 'Não'")
    }
    function calculo(imc1) {
        if (imc1 < 16) {
            return "Magreza Grave"
        } else if (imc1 >= 16 && imc1 <= 16.99) {
            return "Magreza Moderada"
        } else if (imc1 >= 17 && imc1 <= 18.49) {
            return "Magreza Leve"
        } else if (imc1 >= 18.5 && imc1 <= 24.99) {
            return "Saúdavel"
        } else if (imc1 >= 25 && imc1 <= 29.99) {
            return "Sobrepeso"
        } else if (imc1 >= 30 && imc1 <= 34.99) {
            return "Obesidade Grau 1"
        } else if (imc1 >= 35 && imc1 <= 39.99) {
            return "Obesidade Grau 2"
        } else if (imc1 >= 40) {
            return "Obesidade Grau 3"
        }
    }
}

// Chamada da execucao.
program()
