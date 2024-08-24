// 3) Em um jogo de Tower Defense, o castelo (torre) tem um total de 500 de HP. Faça um programa no qual o usuário 
// possa escolher entre 3 tipos de ataque e um de defesa: 

// A) Ataque Bomba -100HP
// B) Ataque Granada -80HP
// C) Ataque Arqueiro -40HP
// D) Defesa Escudo +20HP

// Mostrar o HP do castelo atualizado a cada rodada. Caso o HP do castelo acabe, mostrar "Jogo encerrado, com X rodadas!"


alert('Bem-vindo ao requintado jogo de tortura da torre! Esta magnífica torre possui 500 pontos de vida, e você terá à sua disposição uma variedade de ações para submeter esta pobre estrutura à sua vontade')
let resposta
let vidaTorre = 500
let danoBomba = 100
let danoGranada = 80
let danoArco = 40
let defesaEscudo = 20
let contador = 0
while (vidaTorre > 0) {
  resposta = prompt('Digite: \n (A) Ataque Bomba -100HP\n (B) Ataque Granada -80HP\n (C) Ataque Arqueiro -40HP\n (D) Defesa Escudo +20HP').toUpperCase()

switch (resposta) {
  case 'A':
    vidaTorre -= danoBomba
    alert(`HP total da torre: ${vidaTorre}`)
    contador ++
    break
  case 'B':
    vidaTorre -= danoGranada
    alert(`HP total da torre: ${vidaTorre}`)
    contador ++
    break
  case 'C':
    vidaTorre -= danoArco
    alert(`HP total da torre: ${vidaTorre}`)
    contador ++
    break
  case 'D':
    vidaTorre += defesaEscudo
    alert(`HP total da torre: ${vidaTorre}`)
    contador ++
    break
  default:
    alert('Resposta inválida!')
  }
}
alert(`Jogo encerrado, com ${contador} rodadas!`)