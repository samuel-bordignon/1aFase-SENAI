//Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto).
// Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada,
// deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". 
// Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas
// realizadas. (DESAFIO: Gerar um número aleatório utilizando Math.random e Math.floor)
let numeroSecreto = Math.floor(Math.random() * 101)
let tentativas = 0
let chute

do {
    chute = parseInt(prompt('Digite um número entre 0 e 100 como chute'))
    tentativas ++
    //verifica se a resposta é válida
    if (isNaN(chute) || chute < 0 || chute > 100) {
      alert('Resposta inválida. Digite um numero entre 0 e 100. ')
    }
  
  if(chute > numeroSecreto){
    alert('Menos')
  }else if(chute < numeroSecreto){
    alert('Mais')
  }else if(chute === numeroSecreto){
    alert('Parabéns Você venceu o jogo com ' + tentativas + ' tentativas')
  }
}while(chute != numeroSecreto)