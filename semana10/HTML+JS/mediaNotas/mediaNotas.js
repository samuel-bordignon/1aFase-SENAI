let elmtNotaUm = document.getElementById('notaUm')
let elmtNotaDois = document.getElementById('notaDois')
let elmtNotaTres = document.getElementById('notaTres')
let somaNotas
let numeroAvaliações = 3
let mediaNota

function MEDIANOTAS() {
    somaNotas = (Number(elmtNotaUm.value) + Number(elmtNotaUm.value) + Number(elmtNotaUm.value))
    mediaNota = Number(somaNotas) / Number(numeroAvaliações)
    alert(`sua média é: ${mediaNota.toFixed(2)}`)   
}