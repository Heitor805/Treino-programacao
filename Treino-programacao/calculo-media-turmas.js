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
    let nota1 = []
    let nota2 = []
    let media = []
    let teste = 0
    let notatotal = 0
    let notatotal2 = 0
    let numeroaluno = 2
    console.log('Começe digitando as notas do aluno 1:')
    let nota3 = Number(await getInput(`Informe a nota da prova 1 do aluno:`))
    let nota4 = Number(await getInput(`Informe a nota da prova 2 do aluno:`))
    nota1.push(nota3)
    nota2.push(nota4)
    let pergunta = String(await getInput(`Deseja adicionar mais alunos? sim/nao: `))
    while (pergunta == 'sim') {
        console.log(`Digite as notas do aluno ${numeroaluno}`)
        nota3 = Number(await getInput(`Informe a nota da prova 1 do aluno:`))
        nota4 = Number(await getInput(`Informe a nota da prova 2 do aluno:`))
        nota1.push(nota3)
        nota2.push(nota4)
        pergunta = String(await getInput(`Deseja adicionar mais alunos? sim/nao: `))
        numeroaluno++
    }
    let totalalunos = nota1.length
    let aleatorio = totalalunos - 1
    if (pergunta == 'nao') {
        console.log(nota1, nota2)
            for (i = 0; i <= aleatorio; i++) {
                media[i] = (nota1[i] + nota2[i]) / 2
                notatotal += (nota1[i])
                notatotal2 += (nota2[i])
            }
            for (i = 0; i <= aleatorio; i++) {
                aluno = i + 1
                console.log(`A media do aluno ${aluno} é: ${media[i]}`)
            }
        let mediatotal = notatotal / totalalunos
        let mediatotal2 = notatotal2 / totalalunos
        console.log('A média da primeira turma foi:', mediatotal)
        console.log('A média da segunda turma foi:', mediatotal2)
        console.log('A maior média foi:', Math.max(...media))
    } else {
        console.log('Favor escrever SIM ou NAO')
    }
}   

// Chamada da execucao.
program()