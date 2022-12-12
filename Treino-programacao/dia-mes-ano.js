let dia = //Adicione um número aqui
let mês = //Adicione um número aqui
let ano = //Adicione um número aqui
if ((ano <= 2022)&&(ano != 0)) {
    if ((dia <= 31)&&(dia != 0)) { 
        if (mês === 1) {
            mês = "janeiro"
            console.log(`Este é o dia ${dia} do mês ${mês} do ano ${ano}`)
        } else if (mês === 2) {
            mês = "fevereiro"
            console.log(`Este é o dia ${dia} do mês ${mês} do ano ${ano}`)
        } else if (mês === 3) {
            mês = "março"
            console.log(`Este é o dia ${dia} do mês ${mês} do ano ${ano}`)
        } else if (mês === 4) {
            mês = "abril"
            console.log(`Este é o dia ${dia} do mês ${mês} do ano ${ano}`)
        } else if (mês === 5) {
            mês = "maio"
            console.log(`Este é o dia ${dia} do mês ${mês} do ano ${ano}`)
        } else if (mês === 6) {
            mês = "junho"
            console.log(`Este é o dia ${dia} do mês ${mês} do ano ${ano}`)
        } else if (mês === 7) {
            mês = "julho"
            console.log(`Este é o dia ${dia} do mês ${mês} do ano ${ano}`)
        } else if (mês === 8) {
            mês = "agosto"
            console.log(`Este é o dia ${dia} do mês ${mês} do ano ${ano}`)
        } else if (mês === 9) {
            mês = "setembro"
            console.log(`Este é o dia ${dia} do mês ${mês} do ano ${ano}`)
        } else if (mês === 10) {
            mês = "outubro"
            console.log(`Este é o dia ${dia} do mês ${mês} do ano ${ano}`)
        } else if (mês === 11) {
            mês = "novembro"
            console.log(`Este é o dia ${dia} do mês ${mês} do ano ${ano}`)
        } else if (mês === 12) {
            mês = "dezembro"
            console.log(`Este é o dia ${dia} do mês ${mês} do ano ${ano}`)
        } else {
            console.log('O valor do mês deve ser entre 1 e 12')
        }
    } else {
    console.log('O dia deve ser um valor entre 1 e 31')
    }
} else {
console.log('O ano deve ter um valor entre 1 e 2022')
}