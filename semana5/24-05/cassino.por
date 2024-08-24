programa {
  /*2) Em uma máquina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o
   jogador pode formar sequências de frutas que rendem valores em dinheiro. Criar um 
   programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de 
   acordo com a tabela a seguir.

   CEREJA - CEREJA - CEREJA -> R$100
   LARANJA - LARANJA - LARANJA -> R$80
   CEREJA - LARANJA - CEREJA -> R$50
   LARANJA - CEREJA - LARANJA -> R$25 */
  funcao inicio() {
    cadeia respostaFrutasUm, respostaFrutasDois, respostaFrutasTres

    escreva("Escolha uma sequência de frutas e teste sua sorte :D\n\nFrutas disponíveis: cereja e laranja \n\nDigite (laranja) ou (cereja)\n")
    escreva("Digite a fruta desejada: ")
    leia(respostaFrutasUm)
    escreva("Digite a fruta desejada: ")
    leia(respostaFrutasDois)
    escreva("Digite a fruta desejada: ")
    leia(respostaFrutasTres)

    se(respostaFrutasUm == "cereja" e respostaFrutasDois == "cereja" e respostaFrutasTres == "cereja"){
      escreva("Você ganhou R$100")
    }senao se(respostaFrutasUm == "laranja" e respostaFrutasDois == "laranja" e respostaFrutasTres == "laranja"){
      escreva("Você ganhou R$80")
    }senao se(respostaFrutasUm == "cereja" e respostaFrutasDois == "laranja" e respostaFrutasTres == "cereja"){
      escreva("Você ganhou R$50")
    }senao se(respostaFrutasUm == "laranja" e respostaFrutasDois == "cereja" e respostaFrutasTres == "laranja"){
      escreva("Você ganhou R$25")
    }senao{
      escreva("Sequência azarada. Você não ganhou nada :(")
    }
  }
}
