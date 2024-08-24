programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    
/* Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média
 e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7,
  mostre uma mensagem "Reprovado!" e a média. */



//definindo variaveis
real notaUm, notaDois, notaTres, mediaFinal, quantidadeDeNotas = 3, somaDasNotas, arredondar

//entrada de dados
escreva("digite a primeira nota: ")
leia(notaUm)
escreva("digite a segunda nota: ")
leia(notaDois)
escreva("digite a terceira nota: ")
leia(notaTres)

//calculos
somaDasNotas = notaUm + notaDois + notaTres
mediaFinal = somaDasNotas / quantidadeDeNotas
arredondar = mat.arredondar(mediaFinal, 2)

se(mediaFinal >= 7) {
 //saida de dados
  escreva("aluno aprovado!!!")
}senao{
   //saida de dados
  escreva("aluno reprovado :(")
}
escreva("sua média é: ", arredondar)

  }
}
