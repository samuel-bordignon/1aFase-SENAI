programa {
  /*Uma feira est� realizando promo��o na compra de ovos. Os ovos custam 40 centavos cada, 
  se forem comprados at� 12 (uma d�zia), 30 centavos cada, se forem comprados de 13 a 24 (at� duas d�zias) 
  e 25 centavos cada, caso sejam comprados mais que duas d�zias. Fa�a um programa que leia o n�mero de ovos 
  comprados, calcule e mostre na tela o valor total da compra.*/
  funcao inicio() {
    real totalPagar, numeroOvos

    escreva("Digite quantos ovos desejada: ")
    leia(numeroOvos)

    se(numeroOvos <= 12){
      totalPagar = numeroOvos * 0.40

    }senao se(numeroOvos >= 13 e numeroOvos <= 24){
      totalPagar = numeroOvos * 0.30

    }senao se(numeroOvos >= 25){
      totalPagar = numeroOvos * 0.25

    }
    escreva("Valor total a pagar: R$ ", totalPagar)
  }
}
