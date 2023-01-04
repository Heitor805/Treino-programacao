var h1 = document.getElementById('h1')
h1.addEventListener('mouseenter', entrar)
h1.addEventListener('mouseout', sair)
function entrar() {
    h1.innerText = 'Eu tb estou tentando um pouco de Javascript, clique aqui para voltar a home >.<'
    h1.style.fontSize = '2em'
    h1.style.fontWeight = 'bold'
    h1.style.backgroundColor = 'rgba(83, 255, 300, 0.400)'
}
function sair() {
    h1.innerText = 'Agora vou tentar fazer um site mais trabalhoso, deseje-me boa sorte :D'
    h1.style.fontSize = '2em'
    h1.style.fontWeight = 'bold'
    h1.style.backgroundColor = 'white'
}