programa {
  /*3) Conversor de moedas: Escreva um programa que converta uma quantidade de dólares
   em reais. Se o valor do dólar estiver acima de 5 reais, exiba uma mensagem informando
    que está caro, senão exiba uma mensagem de que está barato. */
  funcao inicio() {
    real valorDolar, conversao, dolarConverao, limiteDolar = 5

    escreva("Digite quanto está valendo o dólar: ")
    leia(valorDolar)
    escreva("Digite o valor, em dólar, que você deseja converter: ")
    leia(dolarConverao)

  conversao = valorDolar * dolarConverao

    se(valorDolar > limiteDolar){
      escreva("O valor do Dólar está caro. US$ ", dolarConverao, ",00 = R$ ", conversao, ",00")

    }senao{
      escreva("O valor do Dólar está barato. US$ ", dolarConverao, " = R$ ", conversao)
    }


  }
}
