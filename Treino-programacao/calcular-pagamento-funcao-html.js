function clicar() {
var total0 = document.getElementById('total0')
var pag = document.getElementById('pag')
var car = document.getElementById('car')
var asw = document.getElementById('asw')
var preço = Number(total0.value)
var pagamento = Number(pag.value)
var cartão = Number(car.value)

switch (pagamento) {
    case 1:
        var resultado = preço*0.9
        asw.innerHTML = `O total do produto foi: ${resultado}`
        break
    case 2:
        var resultado = preço*0.95
        asw.innerHTML = `O total do produto foi: ${resultado}`
        break
    case 3:
            if (cartão == 1) {
                var resultado = preço*1.05
                asw.innerHTML = `O total do produto foi: ${resultado}`
            } else if (cartão == 2) {
                var resultado = preço*1.20
                asw.innerHTML = `O total do produto foi: ${resultado}`
            } else {
                asw.innerHTML = 'O cartão deve ser crédito ou débito'
            }
        break
    default:
        asw.innerHTML = 'O pagamento deve ser feito em dinheiro, cheque ou cartão'
}
}