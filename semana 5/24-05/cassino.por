programa {
  /*2) Em uma m�quina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o
   jogador pode formar sequ�ncias de frutas que rendem valores em dinheiro. Criar um 
   programa que pergunte ao jogador as tr�s frutas sorteadas e mostre o valor ganho de 
   acordo com a tabela a seguir.

   CEREJA - CEREJA - CEREJA -> R$100
   LARANJA - LARANJA - LARANJA -> R$80
   CEREJA - LARANJA - CEREJA -> R$50
   LARANJA - CEREJA - LARANJA -> R$25 */
  funcao inicio() {
    cadeia respostaFrutasUm, respostaFrutasDois, respostaFrutasTres

    escreva("Escolha uma sequ�ncia de frutas e teste sua sorte :D\n\nFrutas dispon�veis: cereja e laranja \n\nDigite (laranja) ou (cereja)\n")
    escreva("Digite a fruta desejada: ")
    leia(respostaFrutasUm)
    escreva("Digite a fruta desejada: ")
    leia(respostaFrutasDois)
    escreva("Digite a fruta desejada: ")
    leia(respostaFrutasTres)

    se(respostaFrutasUm == "cereja" e respostaFrutasDois == "cereja" e respostaFrutasTres == "cereja"){
      escreva("Voc� ganhou R$100")
    }senao se(respostaFrutasUm == "laranja" e respostaFrutasDois == "laranja" e respostaFrutasTres == "laranja"){
      escreva("Voc� ganhou R$80")
    }senao se(respostaFrutasUm == "cereja" e respostaFrutasDois == "laranja" e respostaFrutasTres == "cereja"){
      escreva("Voc� ganhou R$50")
    }senao se(respostaFrutasUm == "laranja" e respostaFrutasDois == "cereja" e respostaFrutasTres == "laranja"){
      escreva("Voc� ganhou R$25")
    }senao{
      escreva("Sequ�ncia azarada. Voc� n�o ganhou nada :(")
    }
  }
}
