function clicar() {
    asw = document.getElementById('asw')
    num0 = document.getElementById('num')
    flista = document.getElementById('flista')
    num = Number(num0.value)
    num++
    asw.innerHTML = `Aqui estão as pessoas na sua frente in the line of the bread`
    if(num <= 100) {
        while (num <= 100) {
            item = document.createElement('Option')
            item.text = `${num}`
            flista.appendChild(item)
            num++
        }
    } else {
        asw.innerHTML = 'Escreva um número menor que 100'
    }
}