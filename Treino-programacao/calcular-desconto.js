//let nome2 = "jose"
//console.log(nome2)
//nome2 = "Joana"
//console.log(nome2)

//const sobrenome = "Matos"
//console.log(sobrenome)
//sobrenome = "Bortolin"
//console.log(sobrenome)

//let num1 = 45
//let num2 = 50
//console.log("Valor final de:",num1+num2)

//let num1 = 20
//let num2 = 5
//console.log("A adição é:",        num1+num2)
//console.log("A subtração é:",     num1-num2)
//console.log("A multiplicação é:", num1*num2)
//console.log("A divisão é:",       num1/num2)
//console.log("O resto é",          num1%num2)


let preço = 20
let qntd = 500
let desconto = 0
 if (qntd >= 100) {
    desconto = (5/100)
 } else if (qntd >= 250) {
    desconto = (10/100)
 } else if (qntd >= 500) {
    desconto = (20/100)
 }
 totaldedesconto = preço*desconto
 console.log("O total do preço é R$", preço.toFixed(2))
 console.log("O total de desconto é R$", totaldedesconto.toFixed(2))
 console.log("O total incluindo desconto é R$", preço-totaldedesconto.toFixed(2))