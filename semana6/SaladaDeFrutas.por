programa {
  /*1) Fazer um programa no qual o usu�rio deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequ�ncia �Qual fruta adicionar?
   �. Quando for adicionado a cereja, mostrar a frase �Sua salada de frutas est� pronta!� */
  funcao inicio() {
    cadeia frutaDigitada = " "

    enquanto(frutaDigitada != "cereja"){

      escreva("Qual fruta adicionar? ")
      leia(frutaDigitada)
    }
    escreva("Sua salada de frutas est� pronta! ")
    
  }
}