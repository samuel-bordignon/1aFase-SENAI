programa {
  /*3) Conversor de moedas: Escreva um programa que converta uma quantidade de d�lares
   em reais. Se o valor do d�lar estiver acima de 5 reais, exiba uma mensagem informando
    que est� caro, sen�o exiba uma mensagem de que est� barato. */
  funcao inicio() {
    real valorDolar, conversao, dolarConverao, limiteDolar = 5

    escreva("Digite quanto est� valendo o d�lar: ")
    leia(valorDolar)
    escreva("Digite o valor, em d�lar, que voc� deseja converter: ")
    leia(dolarConverao)

  conversao = valorDolar * dolarConverao

    se(valorDolar > limiteDolar){
      escreva("O valor do D�lar est� caro. US$ ", dolarConverao, ",00 = R$ ", conversao, ",00")

    }senao{
      escreva("O valor do D�lar est� barato. US$ ", dolarConverao, " = R$ ", conversao)
    }


  }
}
