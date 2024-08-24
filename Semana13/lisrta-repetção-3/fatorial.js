// Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do 
// próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120).
let resposta = Number(prompt('digite um número'))
let numAncora = resposta
let contador = resposta - 1

while (contador != 0) {
    resposta = resposta * contador
    contador--
}
alert(`O fatorial de ${numAncora} é ${resposta}`)