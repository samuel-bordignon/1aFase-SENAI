programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    
/* Crie um programa que pe�a ao usu�rio para digitar tr�s notas individualmente (uma por vez), fa�a a m�dia
 e caso a m�dia seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a m�dia. Caso seja menor que 7,
  mostre uma mensagem "Reprovado!" e a m�dia. */



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
escreva("sua m�dia �: ", arredondar)

  }
}
