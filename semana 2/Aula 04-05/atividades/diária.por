programa {
  funcao inicio() {
    /*Uma pousada cobra R$280 reais a di�ria por quarto e R$15 reais o caf� por pessoa por dia.
     Voc� pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficar�o no 
     mesmo quarto. Informar a quantidade de pessoas, o n�mero de di�rias e quantas pessoas do
      grupo v�o querer caf� di�rio. Mostrar na tela o total a pagar. */

    inteiro numeroPessoas, diaria, pedidosDeCafe
    real valorDiaria, valorCafe, valorTotal
    escreva("\ndigite o n�mero de pessoas: ")
     leia(numeroPessoas)
    escreva("\ndigite quantos dias vai durar a di�ria: ")
    leia(diaria)
    escreva("\ndigite quntas pessoas v�o querer caf�: ")
    leia(pedidosDeCafe)

    valorCafe = pedidosDeCafe * 15
    valorCafe = valorCafe * diaria
    valorDiaria = diaria * 280
     valorTotal = valorDiaria + valorCafe
     escreva("valor total: ", valorTotal, " R$")



  }
}
