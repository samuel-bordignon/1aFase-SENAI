// Desenvolver um programa no qual o usuário digite o número de multas
// que deseja cadastrar e para cada multa deve colocar o valor em reais
// e os pontos perdidos na carteira de habilitação. Ao final, mostrar o
// somatório das multas e dos pontos, caso os pontos alcancem 21 ou
// mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.
let nuemroMultas = parseInt(prompt('Digite a quantidade de multas que você deseja cadastrar: '))
let somaMulta = 0 
let valorMultas = 0
let contador = 0
let pontosPerdidos

while(contador < nuemroMultas){
    contador ++
    valorMultas = parseFloat(prompt('Digite o valor da multa número ' + i))
    somaMulta += valorMultas 
}
pontosPerdidos = parseInt(prompt('Digite a quantidade de pontos perdidos na carteira: '))

if(pontosPerdidos > 21){
alert('Você está irregular')
}else{
    alert('Você está regular')
}
alert(`Total de pontos perdidos na carteira: ${pontosPerdidos}, valor total das multas R$ ${somaMulta}. `)